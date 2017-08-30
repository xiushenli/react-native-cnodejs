
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

function Card({ item, navigate }) {

  return (
    <TouchableOpacity onPress={() => { navigate('Detail', { id: item.id }) }}>
      <View style={styles.list}>
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.h3}>{item.title}</Text>
        </View >
        <View style={styles.content}>
          <Image source={{ uri: item.author.avatar_url }} style={styles.avatar} />
          <View style={styles.info}>
            <View style={styles.p}>
              <Text style={styles.name}>{item.author.loginname}</Text>
            </View>
            <View style={styles.p}>
              <Text style={styles.time}>{item.last_reply_at}</Text>
            </View>
          </View>
        </View>
      </View >
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#d5dbdb'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  tab: {
    marginRight: 10,
    paddingTop: 5,
    paddingLeft: 6,
    paddingBottom: 5,
    paddingRight: 6,
    borderRadius: 3,
  },

  sort: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  h3: {
    flex: 1,
    overflow: 'hidden',
    fontSize: 16,
    fontWeight: 'bold',
  },

  top: {
    backgroundColor: '#e74c3c',
  },

  ask: {
    backgroundColor: '#3498db',
  },

  good: {
    backgroundColor: '#e67e22',
  },

  share: {
    backgroundColor: '#1abc9c',
  },

  default: {
    backgroundColor: '#e7e7e7',
  },

  content: {
    paddingTop: 10,
    flexDirection: 'row'
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  p: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },

  status: {
    flexDirection: 'row',
  },

  name: {
    fontSize: 12,
  },

  time: {
    fontSize: 12,
  },

  b: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  reply: {
    color: '#42b983',
  }
});

export default Card