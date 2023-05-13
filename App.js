import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, Dimensions, Text, View, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function App() {

  const [onRegister, setOnRegister] = useState(false);

  const [loginUsername,setLoginUsername]=useState('')
  const [loginPassword,setLoginPassword]=useState('')

  const [registerUsername,setRegisterUsername]=useState('')
  const [registerPassword,setRegisterPassword]=useState('')
  const [registerEmail,setRegisterEmail]=useState('')

  return (
    <View style={{ flex: 1, backgroundColor: "#303030" }}>
      <StatusBar style="auto" />
      <View style={{ width: WIDTH * .7, height: WIDTH * .7, backgroundColor: '#FE627C', position: 'absolute', borderRadius: WIDTH * 3.5, top: WIDTH * -0.2 }}></View>
      <View style={{ width: WIDTH * .3, height: WIDTH * .3, backgroundColor: '#F95E69', position: 'absolute', borderRadius: WIDTH * 2.5, top: WIDTH * -0.1, left: WIDTH * 0.6 }} />
      <View style={{ width: WIDTH * .4, height: WIDTH * .4, backgroundColor: '#F95E69', position: 'absolute', borderRadius: WIDTH * 2.5, bottom: WIDTH * -0.1, left: WIDTH * 0.7 }} />
      <View style={{ padding: WIDTH * 0.5 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: WIDTH * -0.45, marginVertical: WIDTH * 0.10, marginBottom: WIDTH * -0.5 }}>
          <TouchableOpacity style={{ paddingVertical: WIDTH * .10, borderBottomWidth: 3, borderBottomColor: onRegister ? 'rgba(255,255,255,0.2)' : 'white', width: WIDTH * .25 }} onPress={() => setOnRegister(false)}>
            <Text style={{ color: onRegister ? 'rgba(255,255,255,0.2)' : 'white', marginBottom: WIDTH * -.2, fontSize: WIDTH * 0.050 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: WIDTH * .10, borderBottomWidth: 3, borderBottomColor: !onRegister ? 'rgba(255,255,255,0.2)' : 'white', width: WIDTH * .24 }} onPress={() => setOnRegister(true)}>
            <Text style={{ color: !onRegister ? 'rgba(255,255,255,0.2)' : 'white', marginBottom: WIDTH * -.2, fontSize: WIDTH * 0.050 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!onRegister ? (
        <View style={{ padding: WIDTH * .1, marginTop: WIDTH * -.18 }}>
        <View style={{ padding: WIDTH * .02, backgroundColor: '#373737', marginBottom: WIDTH * .03, borderRadius: 12 }}>
          <Text style={{ color: '#F95E69', fontSize: WIDTH * 0.048, fontWeight: 'bold' }}>Username</Text>
          <TextInput style={{ color: 'white', fontSize: WIDTH * .04 }} />
        </View>
        <View style={{ padding: WIDTH * .02, backgroundColor: '#373737', marginBottom: WIDTH * .03, borderRadius: 12 }}>
          <Text style={{ color: '#F95E69', fontSize: WIDTH * 0.048, fontWeight: 'bold' }}>Password</Text>
          <TextInput style={{ color: 'white', fontSize: WIDTH * .04 }} secureTextEntry />
        </View>
        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
          <Text style={{ color: '#F17B83', fontSize: WIDTH * 0.035, fontWeight: 'bold' }}>Forget password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#F73A79', borderRadius: 30, marginTop: WIDTH * .05, paddingVertical: WIDTH * .03 }}>
          <Text style={{ color: '#fff', fontSize: WIDTH * 0.035, textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: WIDTH * .05 }}>
          <Text style={{ color: '#fff', fontSize: WIDTH * 0.038, fontWeight: 'bold' }}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => setOnRegister(true)}>
            <Text style={{ color: '#F17B83', fontSize: WIDTH * 0.038, fontWeight: 'bold' }}> Create</Text>
          </TouchableOpacity>
        </View>
      </View>
      ):(
        <View style={{ padding: WIDTH * .1, marginTop: WIDTH * -.18 }}>
        <View style={{ padding: WIDTH * .02, backgroundColor: '#373737', marginBottom: WIDTH * .03, borderRadius: 12 }}>
          <Text style={{ color: '#F95E69', fontSize: WIDTH * 0.048, fontWeight: 'bold' }}>Username</Text>
          <TextInput style={{ color: 'white', fontSize: WIDTH * .04 }} />
        </View>
        <View style={{ padding: WIDTH * .02, backgroundColor: '#373737', marginBottom: WIDTH * .03, borderRadius: 12 }}>
          <Text style={{ color: '#F95E69', fontSize: WIDTH * 0.048, fontWeight: 'bold' }}>Email</Text>
          <TextInput style={{ color: 'white', fontSize: WIDTH * .04 }} />
        </View>
        <View style={{ padding: WIDTH * .02, backgroundColor: '#373737', marginBottom: WIDTH * .03, borderRadius: 12 }}>
          <Text style={{ color: '#F95E69', fontSize: WIDTH * 0.048, fontWeight: 'bold' }}>Password</Text>
          <TextInput style={{ color: 'white', fontSize: WIDTH * .04 }} secureTextEntry />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#F73A79', borderRadius: 30, marginTop: WIDTH * .05, paddingVertical: WIDTH * .03 }}>
          <Text style={{ color: '#fff', fontSize: WIDTH * 0.035, textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: WIDTH * .05 }}>
          <Text style={{ color: '#fff', fontSize: WIDTH * 0.038, fontWeight: 'bold' }}>Have an account ? </Text>
          <TouchableOpacity onPress={() => setOnRegister(false)}>
            <Text style={{ color: '#F17B83', fontSize: WIDTH * 0.038, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
    </View>
  );
}

