import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {MDBContainer} from 'mdbreact';
import 'react-tabs/style/react-tabs.scss';
import {StyleSheet, css} from 'aphrodite/no-important'


const styles = StyleSheet.create({
  tabsTitleSelected: {
    backgroundColor: '#3E4551',
    color: '#fff',
    padding: 5,
    width: 180,
    borderRadius: '6px 6px 0px 0px',
    textAlign: 'center',
  },   
  tabsTitle: {
    color: '#fff',
    fontWeight: '700',
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '6px 6px 0px 0px',
    border: '1px solid transparent',
    borderBottom: 'none',    
    bottom: '-1px',
    position: 'relative',
    listStyle: 'none',
    padding: '6px 12px',
    cursor: 'pointer', 
    backgroundColor: 'rgb(230, 74, 25)',
    marginLeft: 3
  }   
});
 

  class MMTabs extends Component {       
    
    renderTabs () {
      return this.props.data?.map((x,y)=>{
        return <Tab key={`${y}tab`} className={css(styles.tabsTitle)}  >{x.name}</Tab> 
      })
    }

    renderComponents() {
      return this.props.data?.map((x,y)=> {
        return (
          <TabPanel key={`${y}panel`}>
            {x.component}
         </TabPanel>
        )
      })
    }

    

    render() {

      return (
    <MDBContainer>
    <Tabs selectedTabClassName={css(styles.tabsTitleSelected)} >
    <TabList >
      {this.renderTabs()}     
    </TabList>
     {this.renderComponents()}
  </Tabs>
        
      </MDBContainer>
    );
  }
}

// MMTabs = withRouter(MMTabs)
export {MMTabs}