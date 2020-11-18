import React from "react";
import ReactDOM from "react-dom";
// import "./filepicker.css";
// import "./dropzone.min.css";
// import "./styling.scss";
import Dropzone from 'react-dropzone'
import './ImageUploadbox.scss'
import { acceptedFileTypesArray, imageMaxSize } from '../../components/Reusable'
import { Image, Modal, Button } from 'semantic-ui-react'
import {getDocuments} from "../../redux/actions/ccDocuments-get-actions";
import {connect} from "react-redux";
import {DOCUMENT_UPLOAD_TYPE} from "../Reusable";

class DropZoneBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: '',
            files: '',
            showDeleteModal: false,
            shouldRemoveImage: false,
            isFileValid: false,
        }
    }

    verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if (currentFileSize > imageMaxSize) {
                alert('This file is not allowed.' + currentFileSize + 'bytes is too large')
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert('This file type is not allowed, only images are allowed')
                return false
            }
            return true
        }
    }

    handleFileDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles)
        }
        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files)

            if (isVerified) {
                this.setState({ isCropActive: true })
                const currentFile = files[0]
                const imageReader = new FileReader()
                imageReader.addEventListener('load', () => {

                    const { files, isFileValid } = this.state
                    let defaultDocArray = this.props.documentsGet.data.documents
                    let documentIndex = defaultDocArray.findIndex(item => item.type === this.props.type)
                    defaultDocArray[documentIndex]['files'] = currentFile
                    defaultDocArray[documentIndex]['imageSrc'] = imageReader.result
                    defaultDocArray[documentIndex]['isFileValid'] = true
                    this.props.getDocuments(getDocuments(defaultDocArray))

                }, false)
                imageReader.readAsDataURL(currentFile)
            }
        }
    }

    imageDeleteConfirmHandler = (isConfirm) => {
        if(isConfirm){
            const { files, isFileValid } = this.state
            let defaultDocArray = this.props.documentsGet.data.documents
            let documentIndex = defaultDocArray.findIndex(item => item.type === this.props.type)
            defaultDocArray[documentIndex]['files'] = ''
            defaultDocArray[documentIndex]['imageSrc'] = ''
            defaultDocArray[documentIndex]['isFileValid'] = false
            this.props.getDocuments(getDocuments(defaultDocArray))
        }
        this.onImageDeletePressModalClose()
    }

    onImageDeletePressModalOpen= (action) => {
        this.setState({ showDeleteModal: true })
    }
    onImageDeletePressModalClose= (action) => {
        this.setState({ showDeleteModal: false })
    }

    updateImageToStore = () => {
        const { files, isFileValid } = this.state
        const defaultDocArray = this.props.documentsGet.data.documents
        defaultDocArray[this.props.type]['files'] = files
        defaultDocArray[this.props.type]['isFileValid'] = isFileValid

        this.props.getDocuments(getDocuments(defaultDocArray))
    }

    loadInitial = () => {
        if(!this.props.documentsGet.data.documents.length){
            const documents = DOCUMENT_UPLOAD_TYPE.map((document) => {
                return {
                    type: document.value,
                    files: '',
                    isFileValid: false,
                }
            })
            this.props.getDocuments(getDocuments(documents))
        }
    }

    componentDidMount(){
        this.loadInitial()
    }


    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;
        const { imageSrc, files, showDeleteModal } = this.state
        const documentsArr = this.props.documentsGet.data
        let document = ''
        console.log('documents: ', documentsArr.documents)
        if(documentsArr.documents && documentsArr.documents.length){
            document = documentsArr.documents.find(item => item.type === this.props.type)
        }
        const eventHandlers = {
            addedfile: this.handleFileDrop.bind(this),
        };

        return (
            <div className="cs-dropzone">
                <Modal
                    size={'mini'}
                    onOpen={this.onImageDeletePressModalOpen}
                    onClose={this.onImageDeletePressModalClose}
                    open={showDeleteModal}
                    closeOnDimmerClick={true}
                    closeIcon
                >
                    <Modal.Header>Confirm deletion</Modal.Header>
                    <Modal.Content>
                        Are you sure you want to permanently remove this item?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary onClick={() => this.imageDeleteConfirmHandler(1)}>Delete</Button>
                        <Button secondary onClick={() => this.imageDeleteConfirmHandler(0)}>Cancel</Button>
                    </Modal.Actions>
                </Modal>

                {document.imageSrc && document.imageSrc.length ? (
                    <div className="uploaded-box link-wrap">
                        <div className="uploaded-img-info">
                            <h3 className="doc-title">{this.props.title} uploaded</h3>
                            <p className="doc-txt">{document.files.name}</p>
                        </div>
                        <div className="uploaded-image">
                            <i className="fi flaticon-cancel delete-icon cursor-pointer" onClick={this.onImageDeletePressModalOpen}/>
                            <div className="upload-image-inner">
                                <Image src={document.imageSrc}/>
                            </div>
                        </div>
                    </div>
                ):(
                    <Dropzone
                        onDrop={this.handleFileDrop}
                        maxSize={78643200}
                        multiple={false}
                        accept="image/*"
                    >
                        {({getRootProps, getInputProps}) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className="upload-box link-wrap cursor align-center">
                                    <div className="upload-icon-wrap">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5OC45NjYsMzM5Ljk1Yy03LjE5NywwLTEzLjAzNCw1LjgzNS0xMy4wMzQsMTMuMDM0djQ5LjgwNGMwLDI4Ljc0Ny0yMy4zODgsNTIuMTM1LTUyLjEzNSw1Mi4xMzVINzguMjAzICAgIGMtMjguNzQ3LDAtNTIuMTM1LTIzLjM4OC01Mi4xMzUtNTIuMTM1di00OS44MDRjMC03LjE5OS01LjgzNS0xMy4wMzQtMTMuMDM0LTEzLjAzNEM1LjgzNSwzMzkuOTUsMCwzNDUuNzg1LDAsMzUyLjk4NHY0OS44MDQgICAgYzAsNDMuMTIxLDM1LjA4Miw3OC4yMDMsNzguMjAzLDc4LjIwM2gzNTUuNTk0YzQzLjEyMSwwLDc4LjIwMy0zNS4wODIsNzguMjAzLTc4LjIwM3YtNDkuODA0ICAgIEM1MTIsMzQ1Ljc4NSw1MDYuMTY1LDMzOS45NSw0OTguOTY2LDMzOS45NXoiIGZpbGw9IiNiNDI2ODEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQxOS44MzMsMzkxLjMwNUg5Mi4xNjdjLTcuMTk3LDAtMTMuMDM0LDUuODM1LTEzLjAzNCwxMy4wMzRzNS44MzUsMTMuMDM0LDEzLjAzNCwxMy4wMzRoMzI3LjY2NSAgICBjNy4xOTksMCwxMy4wMzQtNS44MzUsMTMuMDM0LTEzLjAzNFM0MjcuMDMxLDM5MS4zMDUsNDE5LjgzMywzOTEuMzA1eiIgZmlsbD0iI2I0MjY4MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzg2Ljg4MiwxMzYuODMyTDI3Ny43MDgsMzkuMzAxYy0xMi4zNzYtMTEuMDU1LTMxLjA0LTExLjA1Ny00My40MTcsMGwtMTA5LjE3NCw5Ny41MyAgICBjLTUuMzY5LDQuNzk1LTUuODMzLDEzLjAzNS0xLjAzNywxOC40MDRjNC43OTUsNS4zNjcsMTMuMDM0LDUuODM1LDE4LjQwNSwxLjAzN2wxMDAuNDgyLTg5Ljc2NHYyNTIuNjEgICAgYzAsNy4xOTksNS44MzcsMTMuMDM0LDEzLjAzNCwxMy4wMzRjNy4xOTksMCwxMy4wMzQtNS44MzUsMTMuMDM0LTEzLjAzNFY2Ni41MDhsMTAwLjQ4Miw4OS43NjQgICAgYzIuNDg2LDIuMjIxLDUuNTg4LDMuMzE1LDguNjc4LDMuMzE1YzMuNTgzLDAsNy4xNS0xLjQ2OSw5LjcyNi00LjM1MUMzOTIuNzE0LDE0OS44NjcsMzkyLjI1LDE0MS42MjksMzg2Ljg4MiwxMzYuODMyeiIgZmlsbD0iI2I0MjY4MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" className="upload-icon"/>
                                    </div>
                                    <div className="upload-info">
                                        <h3 className="doc-title">Upload {this.props.title}</h3>
                                        <p className="doc-txt">The upload limit is <strong>10MB</strong>, Supported formats are <strong>jpeg, png or .heic</strong></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { verifyPersonalInformationReducer, ccTabSwitchReducer, countryListReducer, getDocumentsReducer } = state
    return {
        verifyPersonalInformation: verifyPersonalInformationReducer,
        ccTabSwitch: ccTabSwitchReducer,
        countryList: countryListReducer,
        documentsGet: getDocumentsReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDocuments: (data) => dispatch(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZoneBox)
