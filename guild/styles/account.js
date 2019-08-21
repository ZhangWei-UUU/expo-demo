import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffda1f",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: "center",
    alignContent: "stretch"
  },
  userContainer: {
    height: 20,
    width: Dimensions.get('window').width * 0.9,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  userWrapperLeft: {
    alignItems: "flex-start",
    width: Dimensions.get('window').width * 0.6,
  },
  userNoteWrapper: {
    marginTop: 5,
    borderRadius: 28,
    backgroundColor: "#f9f0c1",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  userName: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18
  },
  userNote: {
    color: "#999",
  },
  card: {
    width: Dimensions.get('window').width * 0.9,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 50,
    alignItems: "center",
    padding: 10
  },
  cardBg: {
    width: Dimensions.get('window').width * 0.9,
    height: 220,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 10,

  },
  cardBgWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  assetWrapperLeft: {
    alignItems: "flex-start",
    width: Dimensions.get('window').width * 0.5,
  },
  assetWrapperRight: {
    alignItems: "flex-start",
    width: Dimensions.get('window').width * 0.3,
  },
  assetNumber: {
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 30
  },
  assetBenifit: {
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 25,
    color: "#ff4747"
  },
  grid: {
    width: '50%',
    padding: 10,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    alignItems: 'stretch',
    alignContent: "stretch",
    height: 80
  },
  gridTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 14
  }
});