import React, { Fragment, Component } from 'react';
import { Main } from '../../components/main'
import { MDBCol, MDBRow, MDBPageItem, MDBPageNav, MDBPagination } from 'mdbreact'
import { MMCard } from '../../components/card'
import MMBusca from '../../components/pesquisa'
import { StyleSheet, css } from 'aphrodite'
import Api from '../../core/api'


const styles = StyleSheet.create({
  searchForm: {
    alignItens: 'center',
    display: 'block',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },

  btnPaginator: {
    color: '#FFF',
    fontWeight: '500',
    transitionDuration: '300ms',
    ':hover':{
      backgroundColor: 'rgba(211, 47, 47, 0.2)',
      transitionDuration: '300ms',
    },
    ':active':{
      backgroundColor: 'rgba(211, 47, 47, 1)',
    },
    ':disabled':{
      backgroundColor: 'rgba(62, 69, 81, 0.2)'
    }
  }
})



export default class MMSearch extends Component {

  constructor(props){
    super(props)
    this.state = {     
        searchInput: '',
        alphabet: '',
        currentPage: 1,   // Actual page init    
        pageBound: 3,
        upperPageBound: 3,
        lowerPageBound: 0,
        paginate: 10,   
    
        manga: [
          
        ], 
        result:[],    
      }      
      // this.MMPagination().handleClick() = this.MMPagination().handleClick().bind(this)
    }

    componentDidMount(){
      this.getData();
    }

    async getData (){     
      Api.getShowMangaSearch().then(
        res => {
          
          if (res.status === 'success'){
            let data = [];
            res.data.data.map((x,y)=> {
              console.log()
                data.push({ 
                  id: x.id,
                  title: x.title,
                  image: `data:image/png;base64,${x.avatar}`,
                }) 
            })           
            this.setState({manga: data})
          }
        }        
      )
    }
  

  onSearchInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }
  onAlphabetClick = (e) => {
    this.setState({ alphabet: e.target.value })
  }
  prepareAlphabets = () => {
    let result = [];
      result.push(
        <button type="button" className={`btn btn-sm red darken-2 white-text `} key={'itodf'} onClick={this.onAlphabetClick} value={''} >{`...`}</button>
      )
    for (let i = 65; i < 91; i++) {
      result.push(
        <button type="button" className={`btn btn-sm red darken-2 white-text `} key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
      )
    }
    return result;
  }

  filterElement = (result, indexOfLastTodo, indexOfFistTodo) => {
    let data = result.slice(indexOfFistTodo, indexOfLastTodo);
     return data;
  }

  elementContainsSearchString = (searchInput, element) => (searchInput ? element.title.toLowerCase().includes(searchInput.toLowerCase()) : false);
  filterItems = (itemList, currentPage, paginate ) => {
    let result = [];
    const indexOfLastTodo = currentPage * paginate;
    const indexOfFistTodo = indexOfLastTodo - paginate;
    const { searchInput, alphabet } = this.state;
    if (itemList && (searchInput || alphabet)) {
      result = itemList.filter((element) => (element.title.charAt(0).toLowerCase() === alphabet.toLowerCase()) ||
        this.elementContainsSearchString(searchInput, element));
        result = this.filterElement(result, indexOfLastTodo, indexOfFistTodo); 
        return result;       
    } else {
      result = this.filterElement(itemList, indexOfLastTodo, indexOfFistTodo) || [];       
      return result;      
    } 
  }
   
  MMPagination = (result, filtered) => {
    ///render numbers 
    const handleClick = (event) => {
      // console.log(event)
      this.setState({
        currentPage: Number(event) 
      });
    }

    const btnDecrementClick = (event) => {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
        currentPage: this.state.upperPageBound - this.state.pageBound,
      })
    }

    const btnIncrementClick = (event) => {
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
        upperPageBound: this.state.upperPageBound + this.state.pageBound,       
        currentPage: this.state.upperPageBound + 1,
      })
    }

    const nextButtonClick = (event) => {
      if ((this.state.currentPage + 1) > this.state.upperPageBound) {
        this.setState({
          upperPageBound: this.state.upperPageBound + this.state.pageBound,
          lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
        });
      }
      this.setState({
        currentPage: this.state.currentPage + 1,
      })
    };

    const prevButtonClick = (event) => {
      if((this.state.currentPage -1)%this.state.pageBound === 0 ){
        this.setState({
          upperPageBound: this.state.upperPageBound - this.state.pageBound,
          lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
          currentPage : this.state.currentPage - 1
        });
      } 
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  

    // result = result.filter(filtered)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(result.length / this.state.paginate); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      let active = () => {
        if (number === this.state.currentPage) return true

        return false

      }
      if (number === 1 && this.state.currentPage === 1) {
        return (
          <MDBPageItem className={`${css(styles.btnPaginator)}`} active={active()} key={number} >
            <MDBPageNav className={`${css(styles.btnPaginator)}`} onClick={() => handleClick(number)} id={number}>
              {number}
            </MDBPageNav>
          </MDBPageItem>
        )
      }
      else if ((number < this.state.upperPageBound + 1) && number > this.state.lowerPageBound) {
        return (
          <MDBPageItem  className={` border black rounded border-light ${css(styles.btnPaginator)} `} active={active()} key={number} >
            <MDBPageNav  className={`${css(styles.btnPaginator)}`} onClick={() => handleClick(number)} id={number}>
              {number}
            </MDBPageNav>
          </MDBPageItem>
        )
      }
    });



    // Botões das Paginas

    const nextPage = () => {
      return (
        <MDBPageItem className={` border black rounded border-light ${css(styles.btnPaginator)} `}
          disabled={Math.ceil(result.length / this.state.paginate) === this.state.currentPage ? true : false}
          onClick={() => nextButtonClick()}
        >
          <MDBPageNav  className={`${css(styles.btnPaginator)} waves`} >
            {'Próxima'}
          </MDBPageNav>
        </MDBPageItem>
      )
    }

    const prevPage = () => {
      return (
        <MDBPageItem className={` border black rounded border-light ${css(styles.btnPaginator)} `}
          disabled={this.state.currentPage === 1 ? true : false}
          onClick={() => prevButtonClick()}
        >
          <MDBPageNav  className={`${css(styles.btnPaginator)} waves`} >
            {'Anterior'}
          </MDBPageNav>
        </MDBPageItem>
      )
    }

    let pageIncrementBtn = null;

    if (pageNumbers.length > this.state.upperPageBound) {
      pageIncrementBtn =
        <MDBPageItem className={`border black rounded border-light ${css(styles.btnPaginator)} `} onClick={() => btnIncrementClick()} >
          <MDBPageNav className={css(styles.btnPaginator)} >
            &hellip;
            </MDBPageNav>
        </MDBPageItem>
    }

    let pageDecrementBtn = null;

    if (this.state.lowerPageBound >= 1) {
      pageDecrementBtn =
        <MDBPageItem className={`border black rounded border-light ${css(styles.btnPaginator)} `} onClick={() => btnDecrementClick()} >
          <MDBPageNav className={css(styles.btnPaginator)} >
            &hellip;
            </MDBPageNav>
        </MDBPageItem>
    }

    return (
      <MDBPagination className={'justify-content-center'} color={`red darken-2`}>
        {prevPage()}
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        {nextPage()}
      </MDBPagination>
    )
  };

  renderManga = (result) => {
    if(result.length > 0){
      return (
        <>
          <MDBRow className={'mt-3'}>
            {
              result?.map((x, y) => {
                return (
                  <MDBCol key={`${y}manga`} lg='2' md='3' sm='6' >
                    <MMCard title={x.title} id={x.id} image={x.image} chapter={x.chapter} />
                  </MDBCol>
                )
              })
            }
          </MDBRow>  
        </>
      )
    }
    else{
      return (
        <h3>Não foram encontrados mangás</h3>
      )
    }
    };    
    
  

  render() {
    // const itemList = undefined;
    // const filteredList = ;
    return (
      // 
      <Main>
        <Fragment>
          <div className={`${css(styles.searchForm)} mb-2`} >
            <MMBusca onChange={this.onSearchInputChange} />
          </div>
          <div >
            {this.prepareAlphabets()}
            {/* <ul> */}
            {this.renderManga(this.filterItems(this.state.manga, this.state.currentPage ,this.state.paginate))}
            {/* {} */}
            {/* </ul> */}
            <div className='justify-content-center'>
            {this.MMPagination(this.state.manga, this.filterItems(this.state.manga, this.state.currentPage ,this.state.paginate))}
            </div>
          </div>
        </Fragment>
      </Main>

    );
  }
}