import { _decorator, Color, Component, instantiate, Node, Prefab, Sprite, Vec3} from 'cc';
const { ccclass, property } = _decorator;

const Board_Size = {
    row: 5,
    col: 5
}

const {row, col} = Board_Size;



enum CandyNo {
    redCandyNo = 1,
    greenCandyNo,
    blueCandyNo,
    yellowCandyNo
}

const randomCandy = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

@ccclass('CandyBoard')
export class CandyBoard extends Component {
    @property({
        type: Node
    })
    public cell: Node[] = [];

    @property({
        type: Prefab
    })
    public candyPrefab: Prefab;

   public candyBoard: number[][] = [[0,0,0,0,0],
                                     [0,0,0,0,0],
                                     [0,0,0,0,0],
                                     [0,0,0,0,0],
                                     [0,0,0,0,0]];

    onLoad(){
        this.fillRandomCandy();
    }

    fillRandomCandy(){
        let index = 0;
        for(let i=0;i<row;i++){
            for(let j=0;j<col;j++){
                let value = randomCandy(1,5);
                this.candyBoard[i][j] = value;
                console.log(this.candyBoard);
                if(value == CandyNo.redCandyNo){
                    this.makeRedCandy(index);
                    index++;
                }else if(value == CandyNo.greenCandyNo){
                    this.makeGreenCandy(index);
                    index++;
                }else if(value == CandyNo.blueCandyNo){
                    this.makeBlueCandy(index);
                    index++;
                }else{
                    this.makeYellowCandy(index);
                    index++;
                }
            }
        }
    }

    makeGreenCandy(index: number){
        let greenCandy = instantiate(this.candyPrefab);
        greenCandy.getComponent(Sprite).color = Color.GREEN;
        greenCandy.setParent(this.node);
        let x = this.cell[index].position.x;
        let y = this.cell[index].position.y;
        greenCandy.setPosition(x,y,0);
    }

    makeBlueCandy(index: number){
        let blueCandy = instantiate(this.candyPrefab);
        blueCandy.getComponent(Sprite).color = Color.BLUE;
        blueCandy.setParent(this.node);
        let x = this.cell[index].position.x;
        let y = this.cell[index].position.y;
        blueCandy.setPosition(x,y,0);
        // blueCandy.position = new Vec3(x,y,0);
    }

    makeYellowCandy(index: number){
        let yellowCandy = instantiate(this.candyPrefab);
        yellowCandy.getComponent(Sprite).color = Color.YELLOW;
        yellowCandy.setParent(this.node);
        let x = this.cell[index].position.x;
        let y = this.cell[index].position.y;
        yellowCandy.setPosition(x,y,0);
        // yellowCandy.position = new Vec3(x,y,0);
    }

    makeRedCandy(index: number){
        let redCandy = instantiate(this.candyPrefab);
        redCandy.setParent(this.node);
        let x = this.cell[index].position.x;
        let y = this.cell[index].position.y;
        redCandy.setPosition(x,y,0);
        // redCandy.position = new Vec3(x,y,0);
    }

    update(dt: number){
        // this.checkForMatches();
    }

    // checkForMatches() {
    //     // Add your logic for checking matches here
    //     // You may want to iterate through the candyBoard array and check for matches horizontally and vertically
    //     // Example: Check horizontally
    //     for (let i = 0; i < row; i++) {
    //         for (let j = 0; j < col - 2; j++) {
    //             if (this.candyBoard[i][j] === this.candyBoard[i][j + 1] && this.candyBoard[i][j] === this.candyBoard[i][j + 2]) {
    //                 console.log(`Horizontal match at (${i}, ${j})`);
    //                 this.removeCandy(i, j);
    //                 this.removeCandy(i, j + 1);
    //                 this.removeCandy(i, j + 2);
    //                 // Perform actions for a match, such as removing candies or scoring points
    //             }
    //         }
    //     }

    //     // Example: Check vertically
    //     for (let i = 0; i < row - 2; i++) {
    //         for (let j = 0; j < col; j++) {
    //             if (this.candyBoard[i][j] === this.candyBoard[i + 1][j] && this.candyBoard[i][j] === this.candyBoard[i + 2][j]) {
    //                 console.log(`Vertical match at (${i}, ${j})`);
    //                 // Perform actions for a match,
    //             }
    //         }
    //     }
    // }
    
    // removeCandy(row: number, col: number) {
    //     // Remove the candy from the board and destroy its node
    //     this.candyBoard[row][col] = 0;
    //     const index = row * col + col;
    //     this.cell[index].destroy();
    // }
}


