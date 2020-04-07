import { reducer as voxeetReducer } from '@voxeet/react-components';
import React from 'react'
import thunkMidleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { ConferenceRoom, VoxeetProvider } from '@voxeet/react-components'

// Import Style
import '@voxeet/react-components/dist/voxeet-react-components.css';

const reducers = combineReducers({
  voxeet: voxeetReducer
});

const configureStore = () => createStore(
  reducers,
  applyMiddleware(thunkMidleware)
)


const settings = {
  consumerKey: 'ZG9idXUwdXVoc250NQ==',
  consumerSecret: 'NWQwcDhoOWtmYWxhNHR1a3VnYnJoMjllM3A=',
  conferenceAlias: 'Sample',
  username: 'Ritesh',
  logo: 'https://hubculture.city/wp-content/uploads/2020/03/hub-city-diamond-150x150.png'
}

const isAdmin = {
  value: 'true'
}

const userinfo = {
  name: "Guest" + Math.floor((Math.random() * 100) + 1),
  externalId: '',
  avatarUrl: ''
}

function App() {
  return (
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        autoJoin={true}
        isManualKickAllowed={true}
        liveRecordingEnabled
        isAdmin={isAdmin.value}
        isWidget={false}
        preConfig={true}
        userInfo={userinfo}
        logo={settings.logo}
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
      />
    </VoxeetProvider>
  );
}

export default App;