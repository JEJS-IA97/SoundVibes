import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const NotificationItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <View style={[styles.statusIndicator, { backgroundColor: item.seen ? 'green' : 'red' }]} />
    <Image source={item.profileImage} style={styles.profileImage} />
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTextUser}>{item.userName}</Text>
      <Text style={styles.notificationText}>{item.text}</Text>
      {item.postImage && <Image source={item.postImage} style={styles.postImage} />}
    </View>
  </View>
);

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NotificationItem;