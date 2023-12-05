import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#3498DA',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  login: {
    width: '100%',
    backgroundColor: '#D9EAF8',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    color: 'black',
    marginBottom: 10,
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
    padding: 12,
  },
  btnLogin: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    width: '100%',
    padding: 8,
    marginBottom: 10,
    borderRadius: 2,
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
  },
});
