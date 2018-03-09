export default {
  imageatas: {
    height:100, position: 'absolute', top: 0, left: 0
  },
  imageprofile: {
    alignSelf: "center",borderRadius: 75,marginTop:20,overflow: 'hidden',height: 150,width:150
  },
  profileName: {
    alignSelf: "center",
    color: "#606060",
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold"
  },
  profileTitle: {
    alignSelf: "center",
    color: "#606060",
    fontSize: 13,
  },
  wrapper: {
     flex: 1,
     alignItems: 'center',
     marginTop: 20
   },
   wrapperbawah:{
      flex: 1,
      alignItems: 'center',
   },
   container: {
     flex: .5,
     flexDirection: 'row',
     justifyContent: 'flex-start',
   },
   containerbawah: {
     flex: .5,
     flexDirection: 'row',
     justifyContent: 'flex-start',
     borderTopColor: "#e2e2e2",
     borderTopWidth: 1,
     borderBottomColor: "#e2e2e2",
     borderBottomWidth: 1,
     borderStyle: "solid",
   },
   box: {
     justifyContent: 'center',
     width: 100,
     height: 100,
     margin: 5,
     borderRadius: 5,
     backgroundColor: '#FFF'
   },
   boxbawah: {
     justifyContent: 'center',
     paddingTop: 10,
     paddingBottom: 10,
     paddingLeft: 5,
     paddingRight: 5
   },
   borderright:{
     borderRightColor: "#e2e2e2",
     borderRightWidth: 1,
     borderStyle: "solid",

   },
   backgroundRoundRed: {
     position: 'absolute',
     justifyContent: 'center',
     zIndex: 100,
     alignSelf:"flex-end",
     backgroundColor: '#fd1d45',
     marginTop: -10
   },
   wrapper: {
     backgroundColor: "#FFF",
     flex: 1,
     justifyContent: 'center',
     paddingLeft: 20,
     paddingRight: 20
   },
   textfield:{
     color: "#01589a"
   },
   datePickerBox:{
    marginTop: 9,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#121212',
  },
  formAlert:{width: '100%',backgroundColor:'#F9F9F9', borderColor: '#CDCDCD',borderBottomWidth: .5, justifyContent: 'center'},
  formAlertIconLeft:{position: 'absolute',color:'#01589a',alignSelf:"flex-start", left:10},
  formAlertIconClose:{color:'grey',position: 'absolute',alignItems:'center', alignSelf:"flex-end",width: 30, height: '100%', top:5},
  formAlertContent:{marginLeft: 50, marginRight:50, paddingTop:10, paddingBottom:10},
  formDate:{width: 120, height: 70,borderColor: '#CDCDCD',borderWidth: 1,borderRadius: 2,margin:5},
  formDateTitle:{backgroundColor:'#01589a',alignItems:'center', padding:2},
  formDateTitleText:{color:'white', fontSize:14},
  formDateTanggal:{width: 40, height:48, justifyContent:'center', alignItems:'center'},
  formDateTanggalText:{fontSize:25, fontWeight: '600', color:'#01589a'},
  formDateRight:{height:48, justifyContent:'center'},
  formDateRightText:{fontSize:13,color:'#AAAAAA'},
  formTextInput:{height: 100, borderColor: '#CDCDCD',borderWidth: 1,borderRadius: 2},
  formBorderItem:{borderColor: '#CDCDCD',borderWidth: 1,borderRadius: 2}
};
