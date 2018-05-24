import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert
} from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

class SearchListItem extends React.PureComponent {
  
  render() {
    let {
      id,
      title,
      navigation,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View style={styles.infoContainer}>
              <Text
                style={[styles.title, { flexShrink: 1, overflow: "hidden" }]}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    marginRight: 15,
    marginLeft: 15,
  },
  image: {
    width: 120,
    height: 120
  },
  title: {
    color: "black",
    marginRight: 8,
    marginLeft: 8,
    fontSize: 12
  },
  infoContainer: {
    flexDirection: "row",
    paddingTop: 20,
  }
});
export default SearchListItem;
