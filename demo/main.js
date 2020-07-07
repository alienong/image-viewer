import "../src/index.scss";
import Viewer from "../src/index.js";

const imageViewer = new Viewer([
    {
        name: "test1",
        url: "https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594714546&t=a18fec28fb9758801eeff6e0eef25bc8"
    },
    {
        name: "房子",
        url: "https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594714546&t=07573dfd8a37d0951b2dca4ccb180ea0"
    },
    {
        name: "湖面",
        url: "https://t9.baidu.com/it/u=86853839,3576305254&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594714546&t=789d00c33aa0e1a6bf61c5de341deb7a"
    }
]);


document.getElementById("button").onclick = () => {
    imageViewer.show();
};