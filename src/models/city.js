import { DefineMap, DefineList, superModel } from 'can';
import loader from '@loader';

const City = DefineMap.extend('City', {
  seal: false
}, {
  'name': {
    type: 'any',
    identity: true
  }
});

City.List = DefineList.extend('CityList', {
  '#': City
});

City.connection = superModel({
  url: loader.serviceBaseURL + '/api/cities',
  Map: City,
  List: City.List,
  name: 'city'
});

export default City;
