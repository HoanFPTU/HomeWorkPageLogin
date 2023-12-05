/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './style/style';

class HomePage extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.login}>
          <Text style={style.title}>Đăng nhập</Text>
          <TextInput
            placeholder="Tên đăng nhập"
            inputMode="text"
            style={style.input}
            placeholderTextColor={'black'}></TextInput>
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry={true}
            style={style.input}
            placeholderTextColor={'black'}></TextInput>
          <TouchableOpacity style={style.btnLogin}>
            <Text style={style.textLogin}> ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomePage;
