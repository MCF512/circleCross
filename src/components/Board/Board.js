import { Component } from 'react';
import { connect } from 'react-redux';


class BoardContainer extends Component {

  render() {
    return (
      <div className="flex flex-wrap mb-5 gap-1">
        {this.props.fields.map((field, index) => {
          return <button className="
            cell
            border-2
            border-green-400
            rounded
            p-0
            m-0
            text-green-400
            text-8xl
            flex
            items-center
            justify-center
            leading-none
            bg-transparent
            transition-all
            delay-100
            hover:bg-gray-100
            "
            key={index} onClick={() => this.props.onClick(index)}>
            {field}
          </button>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fields: state.fields
});

export const Board = connect(mapStateToProps)(BoardContainer)