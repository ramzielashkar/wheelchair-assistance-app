import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const useNotifications =()=>{
      const  registerForPushNotificationsAsync = async () => {
        if (Device.isDevice) {
          const status = await Notifications.getPermissionsAsync();
          let finalStatus = status;
          if (status.status !== 'granted') {
            const status = await Notifications.getPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus.status !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          await AsyncStorage.setItem('deviceToken', token)
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      };
      const handleNotification = (notification)=>{

      }
      const handleNotificationResponse = (response)=>{
        const data = response.notification.request.content.data;
        console.log(data.url)
        if(data?.url) Linking.openURL(data.url);
      }
      return {registerForPushNotificationsAsync, handleNotification, handleNotificationResponse}
}