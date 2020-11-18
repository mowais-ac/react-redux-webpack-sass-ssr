import React, { Component } from 'react';
import './ImageUploadbox.scss'

class ImageUploadbox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {title} = this.props
        return (
            <div className="upload-box link-wrap cursor">
                <div className="upload-icon-wrap">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5OC45NjYsMzM5Ljk1Yy03LjE5NywwLTEzLjAzNCw1LjgzNS0xMy4wMzQsMTMuMDM0djQ5LjgwNGMwLDI4Ljc0Ny0yMy4zODgsNTIuMTM1LTUyLjEzNSw1Mi4xMzVINzguMjAzICAgIGMtMjguNzQ3LDAtNTIuMTM1LTIzLjM4OC01Mi4xMzUtNTIuMTM1di00OS44MDRjMC03LjE5OS01LjgzNS0xMy4wMzQtMTMuMDM0LTEzLjAzNEM1LjgzNSwzMzkuOTUsMCwzNDUuNzg1LDAsMzUyLjk4NHY0OS44MDQgICAgYzAsNDMuMTIxLDM1LjA4Miw3OC4yMDMsNzguMjAzLDc4LjIwM2gzNTUuNTk0YzQzLjEyMSwwLDc4LjIwMy0zNS4wODIsNzguMjAzLTc4LjIwM3YtNDkuODA0ICAgIEM1MTIsMzQ1Ljc4NSw1MDYuMTY1LDMzOS45NSw0OTguOTY2LDMzOS45NXoiIGZpbGw9IiNiNDI2ODEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQxOS44MzMsMzkxLjMwNUg5Mi4xNjdjLTcuMTk3LDAtMTMuMDM0LDUuODM1LTEzLjAzNCwxMy4wMzRzNS44MzUsMTMuMDM0LDEzLjAzNCwxMy4wMzRoMzI3LjY2NSAgICBjNy4xOTksMCwxMy4wMzQtNS44MzUsMTMuMDM0LTEzLjAzNFM0MjcuMDMxLDM5MS4zMDUsNDE5LjgzMywzOTEuMzA1eiIgZmlsbD0iI2I0MjY4MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzg2Ljg4MiwxMzYuODMyTDI3Ny43MDgsMzkuMzAxYy0xMi4zNzYtMTEuMDU1LTMxLjA0LTExLjA1Ny00My40MTcsMGwtMTA5LjE3NCw5Ny41MyAgICBjLTUuMzY5LDQuNzk1LTUuODMzLDEzLjAzNS0xLjAzNywxOC40MDRjNC43OTUsNS4zNjcsMTMuMDM0LDUuODM1LDE4LjQwNSwxLjAzN2wxMDAuNDgyLTg5Ljc2NHYyNTIuNjEgICAgYzAsNy4xOTksNS44MzcsMTMuMDM0LDEzLjAzNCwxMy4wMzRjNy4xOTksMCwxMy4wMzQtNS44MzUsMTMuMDM0LTEzLjAzNFY2Ni41MDhsMTAwLjQ4Miw4OS43NjQgICAgYzIuNDg2LDIuMjIxLDUuNTg4LDMuMzE1LDguNjc4LDMuMzE1YzMuNTgzLDAsNy4xNS0xLjQ2OSw5LjcyNi00LjM1MUMzOTIuNzE0LDE0OS44NjcsMzkyLjI1LDE0MS42MjksMzg2Ljg4MiwxMzYuODMyeiIgZmlsbD0iI2I0MjY4MSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" className="upload-icon"/>
                </div>
                <div className="upload-info">
                    <h3 className="h5 doc-title basecolor3">{title}</h3>
                    <p className="doc-txt lightgray f13">The upload limit is <strong>10MB</strong>, Supported formats are <strong>jpeg, png or .heic</strong></p>
                </div>
            </div>
        )
    }
}

export default ImageUploadbox