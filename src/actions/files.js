
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import { prepareFiles } from "../helpers/prepareFiles";
import { prepareOptions } from "../helpers/prepareOptions"



export const eventFilesLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken('files/data');
            const body = await resp.json()
            const files = prepareFiles(body);
            dispatch(filesLoaded(files))
        } catch (error) {
            console.log(error)
        }
    }
}

export const eventFilesLoadingByName = (byName) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken(`files/data?fileName=${byName}`);
            const body = await resp.json()
            const files = prepareFiles(body);
            dispatch(filesLoaded(files))
        } catch (error) {
            console.log(error)
        }
    }
}

const filesLoaded = (files) => ({
    type: types.filesLoaded,
    payload: files
})

export const optionsFilesLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken('files/list');
            const body = await resp.json()
            const options = prepareOptions(body.files);
            dispatch(optionsLoaded(options))
        } catch (error) {
            console.log(error)
        }
    }
}



const optionsLoaded = (options) => ({
    type: types.optionsLoaded,
    payload: options
})