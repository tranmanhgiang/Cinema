import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export enum Colors {
    white = '#fff',
    veryLightGray = '#fcfcfc',
    whiteSmoke = '#f2f2f2',
    whiteMilk = '#f9f9f9',
    black = '#000',
    red = 'red',
    yellow = 'yellow',
    orange = '#E85C07',
    lightOrange = '#e57b01',
    orangeYellow = '#ffd651',
    lightOrangeYellow = '#fbb03b',
    redOrange = '#f44336',
    orchid = '#68DEE1',
    brightGrey = '#54575d',
    veryBrightGrey = '#53575E',
    veryLightGrey = '#f2f2f2',
    gray = 'gray',
    blackCurrant = '#6c3ee9',
    darkShade = '#222',
    lawnGreen = '#7CFC00',
}

export enum FontSize {
    xxSmall = 8,
    xSmall = 10,
    small = 12,
    small11 = 11,
    mediumNormal = 13,
    normal = 14,
    smallMedium = 15,
    medium = 16,
    large = 17,
    xLarge = 18,
    mediumXxLarge = 22,
    xxLarge = 25,
    xxxLarger = 30,
}
