const queries = `
mutation {
    createSeason(input: {_battletag: "5f2ba254ca5ac41aa6269cb5", damageSR: 4444, tankSR: 3333, supportSR: 2222}) {
      _id
      damageSR
      tankSR
      supportSR
    }
  }
  
  query{
    getOneSeason(_id: "") {
      _id
      damageSR
      tankSR
      supportSR
    }
  }
  
  query{
    getAllSeasons(_battletag:"5f2ba254ca5ac41aa6269cb5"){
    _id
    _battletag
    damageSR
      supportSR
    tankSR
      
    }
    }
  }
  
  mutation{
    createBattletag(input:{
      _user:""
      id: 33
      isPublic: false
      level: 444
      name: "YourMomGay#42069"
      platform: "pc"
      playerLevel: 444
      portrait: "0000x000022s"
      urlName: "YourMomGay-42069"
    }){
      _id
      name
      urlName
      isPublic
    }
  }
   
  mutation{
    deleteBattletag(_id: "5f2ba254ca5ac41aa6269cb5") {
      _id
      name
      urlName
      isPublic
    }
  }
  
  query{
    getOneBattletag(_id: "5f2ba254ca5ac41aa6269cb5") {
      _id
      name
      urlName
      isPublic
    }
  }
  
  query{
    getAllBattletags{
      _id
      name
      urlName
      isPublic
    }
  }
  
  query{
    getAllSeasons(_battletag: "5f2ba254ca5ac41aa6269cb5") {
      _id
      tankSR
      supportSR
      damageSR
    }
  }
  
`