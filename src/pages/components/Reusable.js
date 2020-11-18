import React from 'react'
import { NavLink } from 'react-router-dom'
import { Label, Icon, Dimmer, Loader, Segment, Grid} from 'semantic-ui-react'


export const LoaderOverlay = (props) => {
    return (
        <div className='loader-overlay'>
            <Dimmer active inverted><Loader size={props.size ? (props.size) : 'large'}>{props.title ? (props.title) : 'Please Wait'}</Loader></Dimmer>
        </div>
    )
}

export const LoaderEffect = (props) => {
    return (
        <div className='cs-loader'>
            <Loader size={'large'} active={props.active} inline={'centered'}>{props.title !== undefined ? (props.title) : 'Please Wait'}</Loader>
        </div>
    )
}


// Download a Base64-encoded file
export function downloadBase64File (base64Data, filename) {
    var element = document.createElement('a')
    element.setAttribute('href', base64Data)
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}

// Convert a Base64-encoded string to a File object
export function base64StringtoFile (base64String, filename) {
    var arr = base64String.split(','); var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1]); var n = bstr.length; var u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
}
// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64 (base64Data) {
    return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}

// Base64 Image to Canvas with a Crop
export function image64toCanvasRef (canvasRef, image64, pixelCrop) {
    const canvas = canvasRef // document.createElement('canvas');
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.src = image64
    image.onload = function () {
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        )
    }
}

export const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
export const imageMaxSize = 1000000

export const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim() })

export const errorLabel = <Label color='red' pointing />

export const defaultSearchParams = JSON.parse(localStorage.getItem('tutorSearchParams'));

export function getUrlParam(parameter, url) {
    var url_string = url; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get(parameter);
    return c;
}

export function pageRedirect(href, redirectTo, isLoggedin){
    if(isLoggedin){
        window.location.href = redirectTo;
    } else {
        localStorage.setItem('page_path', redirectTo)
        window.location.href = href;
    }
}

export function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export function isEmpty(value){
    return value === undefined || value === null || value === '';
}

export function bytesToSize(bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const maxLength = {
    small: 70,
    medium: 300,
    large: 700,
    xlarge: 1000,
    xxlarge: 1500,
    xxxlarge: 2000,
    xxxxlarge: 3000,
    xxxxxlarge: 4000,
    metaDesc: 250
}

export function liToBr(string) {
    var str = string;
    var html = str.replace("</li>", ' ');
    return html;
}

export function nlToTag(string) {
    let html = string.split('\n').map(item => {
        return <p>{item}</p>
    })
    return html;
}


export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function createFormData(formData, key, data) {
    if (data === Object(data) || Array.isArray(data)) {
        for (var i in data) {
            createFormData(formData, key + '[' + i + ']', data[i]);
        }
    } else {
        formData.append(key, data);
    }
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}