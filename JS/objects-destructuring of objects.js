// const playlist = {
//     name: "Мій супер плейліст",
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount
// );
// const {name, rating, tracks, trackCount} = playlist
// console.log(
//     name,
//     trackCount,
//     tracks,
//     rating
// );

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
// const {name, tag, location, avatar, stats:{followers, views, likes}} = profile
// // const {followers, views, likes} = stats
// console.log(
//     name,
//     views,
//     likes
// )

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
/*
 * Отримуємо імена всіх друзів
 */
// const getAllNames = function (allFriends) {
//     const names = [];
//     for(const friend of allFriends){
//         names.push(friend.name);
//         console.log(friend.name);
//     }
//     return names;
// };
// console.log(getAllNames(friends));

const getAllNames = function (allFriends) {
    const names = [];
    for(const {name} of allFriends){
        names.push(name);
    }
   console.log(names);
};
getAllNames(friends)
const getOnlineFriends = function (allFriends) {
    const names = [];
    for(const friend of allFriends){
        if(friend.online){
            names.push(friend.name)
        }
    }
   console.log(names);
};
getOnlineFriends(friends);


const getOfflineFriends = function (allFriends) {
    const names = [];
    for(const friend of allFriends){
        if(!friend.online){
            names.push(friend.name)
        }
    }
   console.log(names);
};
getOfflineFriends(friends);


const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        nameOnlie:[],
        nameOfline:[]
    }
    for(const friend of allFriends){
        if(friend.online){
            friendsByStatus.nameOnlie.push(friend.name)
        }
        if(!friend.online){
            friendsByStatus.nameOfline.push(friend.name)
        }
    }
    return friendsByStatus, 5
};
friendsByStatus(friends);
