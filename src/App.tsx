import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import { ColdObservable } from 'rxjs/testing/ColdObservable';
import { hot } from 'react-hot-loader';
import {executePolyfills} from './polyfills';
import * as cssVars from 'css-vars-ponyfill';

export type AppProps = {
    secret:string,
    themeConfig?:any,
    showUploadButton?:boolean,
    welcomeMessage?:boolean,
    tenantUrl:string,
    heartbeatInterval?: number
};

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.info("BotChat.App props", props);   
    executePolyfills();
    
    require('../built/css/botchat.css');
    
    ReactDOM.render(React.createElement(AppContainer, props), container);
    setTimeout(() => document.getElementById('wc-app-root').style.removeProperty('visibility'));
}

export default hot(module)(App)

const user = { id:'userid',name:'you'};
const bot = {id:'botid',name:'bot'};

const chatProps = (props:AppProps) => {
    return{
    adaptiveCardsHostConfig:null,
    user:user,
    bot:bot,
    directLine:{secret:props.secret},
    resize:'window',
    formatOptions:{
        showUploadButton:props.themeConfig.settings.showUploadButton? props.themeConfig.settings.showUploadButton : false
    },
    themeConfig: props.themeConfig ? props.themeConfig : '',
    tenantUrl: props.tenantUrl,
    heartbeatInterval: props.heartbeatInterval === undefined ? 60000 : props.heartbeatInterval
} as ChatProps}

const chatTheme=(props:AppProps) => {
    if(props.themeConfig===undefined)
    {
        konsole.warn('themeConfig is undefined, use default theme')
        return null;
    }
    if(props.themeConfig.color===undefined)
    {
        konsole.warn('themeConfig.color is undefined')
        return null;
    }
    if(props.themeConfig.settings===undefined)
    {
        konsole.warn('themeConfig.settings is undefined')
        return null;
    }
return {
            "--c_brand": props.themeConfig.color.brand ? props.themeConfig.color.brand : '',
            "--c_messageFromMe": props.themeConfig.color.messageFromMe ? props.themeConfig.color.messageFromMe : '',
            "--c_messageFromThem": props.themeConfig.color.messageFromThem ? props.themeConfig.color.messageFromThem:'',
            "--c_messageFromMeFont":props.themeConfig.color.messageFromMeFont ? props.themeConfig.color.messageFromMeFont : '',
            "--c_messageFromThemFont":props.themeConfig.color.messageFromThemFont ? props.themeConfig.color.messageFromThemFont : '',
            "--c_shadow": props.themeConfig.color.shadow ? props.themeConfig.color.shadow :'',
            "--c_line": props.themeConfig.color.line ? props.themeConfig.color.line : '',
            "--c_background": props.themeConfig.color.background ? props.themeConfig.color.background : '',
            "--c_consoleBackground": props.themeConfig.color.consoleBackground ? props.themeConfig.color.consoleBackground : '',
            "--c_chatButtonGlow": props.themeConfig.color.chatButtonGlow ? props.themeConfig.color.chatButtonGlow:'',

            "--avatar_a": props.themeConfig.avatar ? +props.themeConfig.avatar: "",
            "--avatar_url_a":props.themeConfig.avatar ? "url("+props.themeConfig.avatar+")" : "",
            "--avatar_b": props.themeConfig.avatar ? +props.themeConfig.avatar: "",
            "--avatar_url_b":props.themeConfig.avatar ? "url("+props.themeConfig.avatar+")" : "",
            "--actionsHeight": props.themeConfig.settings.actionsHeight,
            "--fontFamily": props.themeConfig.settings.fontFamily ? props.themeConfig.settings.fontFamily:'',
            "--fontSize": props.themeConfig.settings.fontSize ? props.themeConfig.settings.fontSize: '',
            "--consoleHeight": props.themeConfig.settings.consoleHeight,
            "--consoleBorderWidth": props.themeConfig.settings.consoleBorderWidth,
            "--borderRadius": props.themeConfig.settings.borderRadius,
            "--headerPaddingBottom": props.themeConfig.settings.headerPaddingBottom,
            "--headerPaddingLeft": props.themeConfig.settings.headerPaddingLeft,
            "--headerPaddingRight": props.themeConfig.settings.headerPaddingRight,
            "--headerPaddingTop": props.themeConfig.settings.headerPaddingTop,
            "--headerTotalHeight": props.themeConfig.settings.headerTotalHeight,
            "--actionTransition": props.themeConfig.settings.actionTransition, 
            "--card_narrow": props.themeConfig.settings.card_narrow, 
            "--card_normal": props.themeConfig.settings.card_normal, 
            "--card_wide": props.themeConfig.settings.card_wide, 
            "--card_borderWidth": props.themeConfig.settings.card_borderWidth, 
            "--card_padding": props.themeConfig.settings.card_padding, 
            "--card_fontSize": props.themeConfig.settings.card_fontSize, 
            "--separation": props.themeConfig.settings.separation,
            "--chatButtonSize": props.themeConfig.settings.chatButtonSize,

            visibility:'hidden'
}as React.CSSProperties}

const AppContainer = (props: AppProps) =>
        <div id ="wc-app-root" className="wc-app" style={chatTheme(props) ? chatTheme(props):{visibility:'hidden'}}>
            <Chat {...chatProps(props)} />
        </div>