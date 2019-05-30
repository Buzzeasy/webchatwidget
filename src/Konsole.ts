export const log = (message?: any, ... optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any)["botchatDebug"] && message)
        console.log(message, ... optionalParams);
}
export const warn = (message?: any, ... optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any)["botchatDebug"] && message)
        console.warn(message, ... optionalParams);
}
export const debug = (message?: any, ... optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any)["botchatDebug"] && message)
        console.debug(message, ... optionalParams);
}
export const error = (message?: any, ... optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any)["botchatDebug"] && message)
        console.error(message, ... optionalParams);
}
export const info = (message?: any, ... optionalParams: any[]) => {
    if (typeof(window) !== 'undefined' && (window as any)["botchatDebug"] && message)
        console.info(message, ... optionalParams);
}