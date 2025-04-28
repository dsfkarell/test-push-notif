import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import '../global.css';

import React, { useEffect } from 'react';
// Include the OneSignal package
import { OneSignal } from 'react-native-onesignal';

export default function OneSignalPushNotifTest() {

  useEffect(() => {
    // Initialize with your OneSignal App ID
    OneSignal.initialize('OneSignal App ID');
    // Use this method to prompt for push notifications.
    OneSignal.Notifications.requestPermission(true).then(async (hasPermission) => {
      if (hasPermission) {
        const pushClientId = await OneSignal.User.getOnesignalId();
        if (pushClientId) {
          OneSignal.login(pushClientId);
        }
      }
    });
  }, []);

  async function btnLunchNotif() {
    fetch(`http://127.0.0.1:8000/api/test-push-notification-to-user/${pushClientId}`).then(response => {
      console.log('Push notification sent to user: ', response);
    })
  }

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 h-screen justify-center items-center">
        <TouchableOpacity className='btn bg-green-500 rounded-lg p-5 mb-4' onPress={btnLunchNotif}>
          <Text className="uppercase w-full font-bold">Recibir push notification</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
