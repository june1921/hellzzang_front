import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './ModalDesign.css'

class LikeButton extends React.Component {
    state = {
        isChecked: false,
        notice: ' ',
    };

    onClick = () => {
        this.state.isChecked ?
            this.setState({
                isChecked: false,
                notice: '',
            })
            :
            this.setState({
                isChecked: true,
            });
    }
    render() {
        return (
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?
                        <HeartFilled className="button red" onClick={this.onClick} /> :
                        <HeartOutlined className="button" onClick={this.onClick} />}
                </div>
            </React.Fragment>
        )
    }
}
export default LikeButton;