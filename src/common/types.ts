export interface NavigationProps {
    navigate: any;
    reset: any;
    goBack: any;
    setParams: any;
    dispatch: any;
    setOptions: any;
    isFocused: any;
    addListener: any;
    emit: any;
}

export interface RouteNavigationProps {
    key: string;
    name: string;
    params: any;
}

export interface SeatStatus {
    index: number;
    name: string;
    isSelected: boolean;
    isChosen: boolean;
}
