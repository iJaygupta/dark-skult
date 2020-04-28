
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from "jquery";

import './ProviderListing.css';
import { bindActionCreators } from 'redux';



class ProviderListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        // $(function () {
        //     $('[data-toggle="tooltip"]').tooltip()
        //   })
        
        $(function () {
           $(document).ready(function(){
               
                $("#table-serach").on("keyup", function() {
                  var value = $(this).val().toLowerCase();
                  $("#table-data tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                  $(".table-menu li").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                });
                
              });
             
                
           
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h6>Provider Listing...</h6>
                <div className="table-wrapper">
                    <div className="table-title">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Brand_Logo</a>
                    <form className="search-box form-inline">
                        {/* <i class="material-icons">&#xE8B6;</i> */}
                        <input id="table-serach" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </nav>
                <table id="table-data" className="table-bordered table table-hover">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Providers <i class="fa fa-sort"></i></th>
                    <th scope="col">Range <i class="fa fa-sort"></i></th>
                    <th scope="col">Rating <i class="fa fa-sort"></i></th>
                    <th scope="col">Explore <i class="fa fa-sort"></i></th>
                    </tr>
                </thead>
               <tbody className="" id="myTable">
                    <tr className="table-success">
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                    <tr className="table-success">
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                    <tr className="table-success">
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                    <tr className="table-success">
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                    <tr className="table-success">
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                    <tr className="table-success">
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Thornton</td>
                    <td>
						<a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                    </tr>
                </tbody>
                </table>
                {/* pagination */}
                
                    
                            <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div><br/>
                            <div className="row container-fluid">
                            <div className="col-sm-6">
                            <ul className="pagination">  {/*justify-content-end */}
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#table-1">1</a></li>
                                <li className="page-item"><a className="page-link" href="#table-2">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul> 
                            </div>
                            <div className="col-sm-6 justify-content-start">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter
                                    <span className="caret"></span></button>
                                    <ul className="dropdown-menu border-0" id="table-menu">
                                    <li className="pl-2"><a href="#">Price</a></li>
                                    <li className="pl-2"><a href="#">Rating</a></li>
                                    <li className="pl-2"><a href="#">Range</a></li>
                                    </ul>
                                </div>
                   
                    </div>
                     </div>
                        
                   </div></div>
                   </div>
                
                
                
        
             </div>             
               
        );
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

function mapDispatchToProps(dispatch) {

    return {
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProviderListing))