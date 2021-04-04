import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN_STORAGE_KEY } from '@common/constants';

const getTokenStorage = async () => {
    const tokenStorageStr: string | null = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
    return tokenStorageStr !== null ? JSON.parse(tokenStorageStr) : null;
};

export { getTokenStorage };
