import React, { Fragment, Component } from 'react';
import { Main } from '../../components/main'
import { MDBCol, MDBRow, MDBPageItem, MDBPageNav, MDBPagination } from 'mdbreact'
import { MMCard } from '../../components/card'
import MMBusca from '../../components/pesquisa'
import { StyleSheet, css } from 'aphrodite'


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
    // 
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
        currentPage: 1,
        pageBound: 3,
        upperPageBound: 3,
        lowerPageBound: 0,
    
    
        manga: [
          {
            id: 1,
            title: 'Black Clover',
            image: 'https://static3.mangalivre.com/capas/XzJfT6TjJArZeQjuoWyWSA/1751/external_cover.jpg',
            chapter: 145
          },
          {
            id: 2,
            title: 'Kenja no Mago',
            image: 'https://static3.mangalivre.com/capas/Oa1oidkFmjRVjVIGoe-H8Q/3902/capa.jpg',
            chapter: 31
          },
          {
            id: 3,
            title: 'Solo Leveling',
            image: 'https://unionleitor.top/assets/uploads/mangas/8e157c06.jpg',
            chapter: 110
          },
          {
            id: 4,
            title: 'I Am The Sorcerer King',
            image: 'https://avt.mkklcdnv6.com/35/c/18-1583498457.jpg',
            chapter: 84
          },
          {
            id: 5,
            title: 'Paragon of Destruction',
            image: 'https://unionleitor.top/assets/uploads/mangas/017f5320.jpg',
            chapter: 29
          },
          {
            id: 6,
            title: 'Dungeon Reset',
            image: 'https://static3.mangalivre.com/capas/bVbDK_6TnBOqmH_8CB1AZg/9375/external_cover.jpg',
            chapter: 19
          },
          {
            id: 7,
            title: 'Tales of Demons End Gods',
            image: 'https://static3.mangalivre.com/capas/gD0Oa7y2CPW5rtPpe0HmRA/2412/external_cover.jpg',
            chapter: 271
          },
          {
            id: 8,
            title: 'Release That Witch',
            image: 'https://static3.mangalivre.com/capas/GkKU9QVql64Bi33TZJi_6A/7966/external_cover.jpg',
            chapter: 105
          },
          {
            id: 9,
            title: 'The Bengining After The End',
            image: 'https://static3.mangalivre.com/capas/izI5uyu6mXDqVc5AmKVaDw/7403/external_cover.jpg',
            chapter: 110
          },
          {
            id: 10,
            title: `A Returner's Magic Should be Special`,
            image: 'https://static3.mangalivre.com/capas/RGs3BU2aa8pUN7hARCKSyQ/7718/external_cover.jpg',
            chapter: 97
          },
          {
            id: 11,
            title: 'Survival of the Sword King',
            image: 'https://static3.mangalivre.com/capas/7nZcVEienUiEzTxguklXbQ/9066/external_cover.jpg',
            chapter: 36
          },
          {
            id: 12,
            title: 'Fights Break Sphere',
            image: 'https://static3.mangalivre.com/capas/VQpv4xINwz2pmep2VGpqkg/2330/external_cover.jpg',
            chapter: 290
          },
        ],        
      }      
      // this.MMPagination().handleClick() = this.MMPagination().handleClick().bind(this)
    }
  

  onSearchInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }
  onAlphabetClick = (e) => {
    this.setState({ alphabet: e.target.value })
  }
  prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <button type="button" className={`btn btn-sm red darken-2 white-text `} key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
      )
    }
    return result;
  }
  elementContainsSearchString = (searchInput, element) => (searchInput ? element.title.toLowerCase().includes(searchInput.toLowerCase()) : false);
  filterItems = (itemList) => {
    let result = [];
    const { searchInput, alphabet } = this.state;
    if (itemList && (searchInput || alphabet)) {
      result = itemList.filter((element) => (element.title.charAt(0).toLowerCase() === alphabet.toLowerCase()) ||
        this.elementContainsSearchString(searchInput, element));
    } else {
      result = itemList || [];
    }

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
        <div className='justify-content-center'>
            {this.MMPagination(result)}
        </div>
        
      </>
    )
  }



  MMPagination = (result) => {
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
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
        currentPage: this.state.upperPageBound + this.state.pageBound,
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
      if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
        this.setState({
          upperPageBound: this.state.upperPageBound - this.state.pageBound,
          lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
          currentPage: this.state.currentPage - 1
        });
      }
      this.setState({
        currentPage: this.state.currentPage - 1,
      })
    }

    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(result.length / 10); i++) {
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
          disabled={Math.ceil(result.length / 10) === this.state.currentPage ? 1 : 0}
          onClick={() => nextButtonClick()}
        >
          <MDBPageNav  className={`${css(styles.btnPaginator)}`} >
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
        <MDBPageItem className={css(styles.btnPaginator)} onClick={() => btnIncrementClick()} >
          <MDBPageNav className={css(styles.btnPaginator)} >
            &hellip;
            </MDBPageNav>
        </MDBPageItem>
    }

    let pageDecrementBtn = null;

    if (this.state.lowerPageBound >= 1) {
      pageDecrementBtn =
        <MDBPageItem className={css(styles.btnPaginator)} onClick={() => btnDecrementClick()} >
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
  }

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
            {this.filterItems(this.state.manga)}
            {/* </ul> */}
          </div>
        </Fragment>
      </Main>

    );
  }
}