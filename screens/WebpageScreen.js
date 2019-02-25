import React,{Component} from 'react';
import { TouchableOpacity,WebView } from 'react-native';

class WebpageScreen extends Component {
    constructor( props ) {
        super( props );
        this.webview = null;
    }
    static navigationOptions = {
         header:null
    };

    sendDataToWeb = () => {
    
    }
    
    componentDidMount(){
        setTimeout(()=>{
            if (this.webview) {
                let data = {
                    name:"火车站",
                    children:[
                        {name:"高铁",children:[
                           {name:"火车头"},
                           {name:"餐车"}
                        ]},
                        {name:"铁轨",children:[
                          {name:"枕木",children:[
                           {name:"火车头"},
                           {name:"餐车",children:[
                          {name:"枕木",children:[
                           {name:"火车头"},
                           {name:"餐车"}
                        ]}
                        ]}
                        ]}
                        ]}
                    ]
                }
                this.webview.postMessage(JSON.stringify(data));
            }
        },1000)
    }
    render() {
        return (
                <WebView
                  ref={( webview ) => this.webview = webview}
                  javaScriptEnabled={true}
                  scalesPageToFit={false}
                  source={require('./test.html')}
                />
        )    
  }
}

export default WebpageScreen
