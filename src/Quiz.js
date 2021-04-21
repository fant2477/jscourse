import { Component } from "react";
import FormCallback from "./componentsQuiz/FormCallback";
import User2 from "./componentsQuiz/User2";

class Quiz extends Component {

    constructor() {
        super();
        this.state = {
            list: [

            ],
            trueCurrentTask: 0,
            allTask: 0,
        };
        this.onAddList = this.onAddList.bind(this);
    }

    onAddList(input) {
        this.setState({
            list: [...this.state.list, { name: input, active: 1 }],
            trueCurrentTask: this.state.trueCurrentTask + 1,
            allTask: this.state.allTask + 1
        });
        console.log("list: ", this.state)
    }


    onClickState(user,i) {

        let newList = this.state.list.map((list, index) => {
            return index === i ? { ...list, active: !list.active } : list;
        });

        if (user.active == 0) {
            // const list =this.state.list
            // list.splice(index,1)
            this.setState({
                list: newList,
                // list: [{...this.state.list},{ name: user.name, active: 1 }],
                allTask: this.state.allTask,
                trueCurrentTask: this.state.trueCurrentTask+1,
            });
        } else {
            // const list =this.state.list
            // list.splice(index,1)
            this.setState({
                list: newList,
                // list: [{...this.state.list},{ name: user.name, active: 0 }],
                allTask: this.state.allTask,
                trueCurrentTask: this.state.trueCurrentTask-1,
            });
        }

        // this.setState({
        //     list: [...this.state.list],
        //     allTask: this.state.allTask,
        //     trueCurrentTask: trueState,

        // });
        // console.log("onClickState user: ", user)
    }


    //   return <ul>{data}</ul>;
    render() {

        const data = this.state.list.map((user,index) => (
            <User2 users={user} key={index} onClickState={() => this.onClickState(user,index)}>
            </User2>
        ));
        console.log("data ja: ", data)
        return (
            <div>
                <p>GG ja</p>
                <FormCallback onAddList={this.onAddList} />
                <p>{this.state.trueCurrentTask} remaining out of {this.state.allTask} tasks</p>
                {/* <User2 users={this.state.list} active="active" onclickState={this.onclickState}/> */}
                <ul>{data}</ul>;


            </div >
        );
    }
}

export default Quiz;