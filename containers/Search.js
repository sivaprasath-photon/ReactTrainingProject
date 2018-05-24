import React, { Component } from "react";
import AdminProductListItem from "../components/AdminProductListItem";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Alert,
  View,
  StyleSheet,
  TextInput
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchListItem from "../components/SearchListItem"
import * as productActionCreators from "../actionCreators/product";
let URI = "http://172.16.99.242:4000";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.productList = [];
  }

  componentDidMount() {
    this.props.actions.getSearch(this.props.page, this.props.limit);
  }

  SearchFilter(text) {
      this.setState({text});
      this.props.actions.searchFilter(text,this.props.searchProducts);
  }

  _getSearch = (page = 1, limit = 8) => {
    this.props.actions.getSearch(page, limit);
  };

  /*  flat list supporting methods */

  _getMore = () => {
    this._getSearch(++this.props.page, this.props.limit);
  };

  _renderItem = ({ index, item }) => {
    return (
      <SearchListItem
        {...this.props}
        id={item.id}
        title={`${item.title}`}
      />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}`;
  };

  _onRefresh = () => {
    //this.setState({ isRefreshing: true });
    this._getSearch();
  };

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={this._onRefresh}
        refreshing={this.props.isRefreshing}
        tintColor={"#00ff80"}
        title={"Refreshing..."}
        titleColor={"#00ff80"}
      />
    );
  }

  /*  flat list supporting methods - END */

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TextInput
          style={styles.TextInputStyleClass}
          onChangeText={(text) => this.SearchFilter(text)}
          value={this.state.text}
          underlineColorAndroid='transparent'
          placeholder="Search Here" />
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            <FlatList
              data={this.props.dataFiltered}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              onEndReachedThreshold={0.5}
              onEndReached={this._getMore}
              refreshControl={this._renderRefreshControl()}
            />
          )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading,
    isRefreshing: state.productState.isRefreshing,
    page: state.productState.page,
    limit: state.productState.limit,
    searchProducts: state.productState.searchProducts,
    dataFiltered:state.productState.dataFiltered
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  TextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
    backgroundColor: "#FFFFFF"

  }

});

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
