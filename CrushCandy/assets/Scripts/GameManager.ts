import { _decorator, Color, Component, instantiate, math, Node, Sprite } from 'cc';
import { GameGlobal } from './GameGlobal';
import { ItemColorBox } from './ItemColorBox';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Color)
    colorBox: Color[] = [];

    @property(Color)
    colorDefault: Color = null!;

    @property(Node)
    panelButtonPlay: Node = null!;
    @property(Node)
    panelBox: Node = null!;

    @property(Node)
    prefabBox: Node = null!;
    @property(Node)
    prefabParentBox: Node = null!;

    @property(Node)
    dragBox: Node = null!;
    @property(Sprite)
    spriteBox: Sprite = null!;

    onLoad(){
        GameGlobal.srcManager = this;
    }

    onPlayGame(){
        this.panelButtonPlay.active = false;
        this.createGridBox();
    }

    createGridBox(){
        this.panelBox.removeAllChildren();
        let arrRow = [];
        let arrColumn = [];

        GameGlobal.listFirstRow = [];
        for(let i=0; i < GameGlobal.colomX; i++){
            GameGlobal.listFirstRow.push(i);
        }

        for(let ix=0; ix < GameGlobal.maxBox; ix++){
            let parentBox: Node = instantiate(this.prefabParentBox);
            let box: Node = instantiate(this.prefabBox);
            let boxScript: ItemColorBox = parentBox.getComponent(ItemColorBox);

            parentBox!.parent = this.panelBox;
            parentBox!.name = "parentBox_" + ix.toString();
            box!.parent = parentBox;
            box!.name = "box_" + ix.toString();

            boxScript.nodeBox = box!;
            boxScript.spriteBox = box!.getComponent(Sprite)!;
            boxScript.idColor = this.randomColor();
            boxScript.spriteBox.color = this.colorBox[boxScript.idColor];
            boxScript.idBox = ix;
        }
    }

    randomColor(){
        return Math.floor(math.random() * this.colorBox.length);
    }
}


