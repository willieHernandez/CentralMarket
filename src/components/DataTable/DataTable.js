import React, {Component} from 'react';
import Cell from './Cell';


class DataTable extends Component{
    constructor(props){
        super(props)

        this.state = {
            cellHeights:[]
        }

        this.tableRef = React.createRef();
        

    }
    
    componentDidMount(){
        this.handleCellHeightResize()
        window.addEventListener("resize", this.handleCellHeightResize)
    }



    componentWillUnmount(){
        window.removeEventListener("resize", this.handleCellHeightResize)
    }

    getTallestCellHeights= () =>{
        const rows = Array.from(this.tableRef.current.getElementsByTagName('tr'))
        let {heights} = this.state;
        (heights = rows.map( (row)=>{
            const fixedCell = (row.childNodes)[0]
            return Math.max(row.clientHeight, fixedCell.clientHeight)
        }))

        return heights
    }

    handleCellHeightResize = () =>{
        console.log("Handle resize was called")
        this.setState({
            cellHeights:[]
        })
        this.setState({cellHeights: this.getTallestCellHeights()})
    }

    getTableRows = () =>{
        console.log("Getting table rows")
        console.log(Object.values(this.props.events))
        return Object.values(this.props.events)
        
        
    }



    render(){
        const {headings} = this.props
        let tableRows = this.getTableRows()
        
        return(
            <div className="data-table-container">
                <div className="scroll-container">
                    <table className="data-table" ref={this.tableRef}>
                        <thead>
                            <tr key="Heading">
                                {headings.map( (value, cellIndex) =>{
                                    return (
                                        <Cell 
                                            key={`heading-${cellIndex}`}
                                            content={value}
                                            header={true}
                                            fixed={cellIndex===0}
                                            height={this.state.cellHeights[0]}
                                        />
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((rowInfo, rowIndex) =>{

                                return(
                                    <tr key={`row-${rowIndex}`}>
                                        {/* {console.log(rowInfo)} */}
                                        {Object.values(rowInfo).map( (cellValue, cellIndex) =>{
                                            {/* console.log(cellValue) */}
                                            return (
                                                <Cell 
                                                    key={`${rowIndex} -${cellIndex}`}
                                                    content={cellValue}
                                                    fixed={cellIndex===0}
                                                    height={this.state.cellHeights[rowIndex + 1]}
                                                />
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default DataTable;