export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }

  return splitName[0][0];
}

export function transformToArr(snapVal) {
  return snapVal ? Object.keys(snapVal) : [];
}

// convert json data into array
export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => ({ ...snapVal[roomId], id: roomId }))
    : [];
}

export function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};

  updates[`/profiles/${userId}/${keyToUpdate}`] = value;

  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  const getRooms = db
    .ref('/rooms')
    .orderByChild('lastMessage/author/uid')
    .eualTo(userId)
    .once('value');

  const [mSnap, rSnap] = Promise.all([getMsgs, getRooms]);

  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });

  rSnap.forEach(roomSnap => {
    updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });

  return updates;
}

export function groupBy(array, groupingKeyFn) {
  return array.reduce((result, item) => {
    const groupingKey = groupingKeyFn(item);

    if (!result[groupingKey]) {
      result[groupingKey] = [];
    }

    result[groupingKey].push(item);

    return result;
  }, {});
}
