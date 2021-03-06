import React from 'react';

import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { GestureResponderEvent, ViewStyle } from 'react-native';

export interface SvgProps {
    style?: ViewStyle;
    onPress?: (e: GestureResponderEvent) => void;
}

export const EyeSlash = ({ style, onPress }: SvgProps): React.ReactElement => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={style} onTouchEnd={onPress}>
        <Path
            d="M2.77734 2L2.07031 2.70312L4.03906 4.67188C1.27344 5.84766 0.156251 8.13281 0.0937505 8.26563L0 8.47656L0.0937505 8.6875C0.175782 8.86328 2.16016 12.9766 7.54688 12.9766C9.14063 12.9766 10.4297 12.6133 11.4648 12.1016L13.3203 13.957L14.0273 13.2461L11.6328 10.8516L11.4492 10.6719C11.4531 10.6719 11.4531 10.6719 11.4531 10.668L10.7227 9.9375C10.7188 9.9375 10.7188 9.9375 10.7188 9.9375L9.02344 8.24609C9.02344 8.24609 9.02734 8.24219 9.02344 8.24219L7.78516 7H7.78125L6.08594 5.30469H6.08984L5.08594 4.30469C5.08594 4.30469 5.08203 4.30078 5.08203 4.30469L2.77734 2ZM7.54688 3.97656C7.09375 3.97656 6.67188 4.01562 6.26563 4.07031L7.21094 5.00781C7.32422 5 7.43359 4.97656 7.54688 4.97656C9.48047 4.97656 11.0508 6.54688 11.0508 8.47656C11.0508 8.59375 11.0273 8.70312 11.0156 8.82031L11.8711 9.67188C11.9805 9.29297 12.0508 8.89453 12.0508 8.47656C12.0508 7.48047 11.7148 6.5625 11.1602 5.81641C12.8242 6.67969 13.6914 7.96484 13.9844 8.47656C13.7813 8.82422 13.2891 9.55078 12.4531 10.2539L13.1758 10.9766C14.418 9.90234 14.9648 8.78125 15.0078 8.6875L15.1016 8.47656L15.0039 8.26563C14.9219 8.08984 12.9375 3.97656 7.54688 3.97656ZM3.92578 5.83594C3.38281 6.57812 3.04688 7.48828 3.04688 8.47656C3.04688 9.47656 3.38672 10.3906 3.94141 11.1367C2.27734 10.2773 1.41016 8.98828 1.11719 8.47656C1.40625 7.98047 2.27734 6.69922 3.92578 5.83594ZM5.23438 5.86719L6.64844 7.28125C6.28516 7.55859 6.04688 7.98828 6.04688 8.47656C6.04688 9.30469 6.72266 9.97656 7.54688 9.97656C8.03906 9.97656 8.46875 9.73828 8.74219 9.375L10.1602 10.793C9.51953 11.5156 8.58984 11.9766 7.54688 11.9766C5.61719 11.9766 4.04688 10.4062 4.04688 8.47656C4.04688 7.4375 4.50781 6.50781 5.23438 5.86719Z"
            fill="#252B40"
        />
    </Svg>
);

export const Eye = ({ style, onPress }: SvgProps): React.ReactElement => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={style} onTouchEnd={onPress}>
        <G clipPath="url(#clip0)">
            <Path
                d="M7.5 4C2.10547 4 0.046875 8.28906 0.046875 8.28906L-0.0546875 8.5L0.046875 8.71094C0.046875 8.71094 2.10547 13 7.5 13C12.8945 13 14.9531 8.71094 14.9531 8.71094L15.0508 8.5L14.9531 8.28906C14.9531 8.28906 12.8945 4 7.5 4ZM7.5 5C9.4375 5 11 6.5625 11 8.5C11 10.4375 9.4375 12 7.5 12C5.5625 12 4 10.4375 4 8.5C4 6.5625 5.5625 5 7.5 5ZM3.94141 5.77734C3.35938 6.53516 3 7.47266 3 8.5C3 9.52734 3.35938 10.4648 3.94141 11.2227C2.02344 10.2695 1.24219 8.75391 1.11719 8.5C1.24219 8.24609 2.02344 6.73047 3.94141 5.77734ZM11.0586 5.77734C12.9766 6.73047 13.7578 8.24609 13.8828 8.5C13.7578 8.75391 12.9766 10.2695 11.0586 11.2227C11.6406 10.4648 12 9.52734 12 8.5C12 7.47266 11.6406 6.53516 11.0586 5.77734ZM7.5 7C6.67188 7 6 7.67188 6 8.5C6 9.32812 6.67188 10 7.5 10C8.32812 10 9 9.32812 9 8.5C9 7.67188 8.32812 7 7.5 7Z"
                fill="#3B4153"
            />
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Path d="M0 0H16V16H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export const BackArrow = (props: any) => (
    <Svg width={19} height={10} viewBox="0 0 19 10" fill="none" {...props}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M18.768 4.414H1.104v1.103h17.664V4.414z" fill="#29537A" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M5.404.132L.481 4.565l.739.82L6.142.952l-.738-.82z" fill="#275075" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M5.404 9.799L.481 5.366l.739-.82L6.142 8.98l-.738.82z" fill="#275075" />
    </Svg>
);

export const Heart = (props: any) => (
    <Svg width="40" height="37" viewBox="0 0 40 37" fill="none" {...props}>
        <Path
            d="M31.8473 19.8765L30.7506 19.0295L29.1405 13L27.5303 19.0295L26.4337 19.8765H22.3625L19.8817 29.1661L17.6881 29.1659L13.3741 13.0013L11.7643 19.0295L10.6674 19.8765H3C7.79465 30.2641 21 37 21 37C21 37 34.2054 30.2638 39 19.8765H31.8473Z"
            fill="#5EDDB6"
        />
        <Path
            d="M8.6337 17.1244L11.1506 7.83417L13.376 7.83435L17.7527 24L19.3859 17.9715L20.4987 17.1246H24.6289L27.1457 7.83435H29.3713L31.8883 17.1246H39.1676C39.6975 15.4887 40 13.7758 40 11.9957C40 5.37058 34.8332 0 28.46 0C25.1176 0 22.1076 1.47766 20 3.8382C17.8927 1.47766 14.8825 0 11.5401 0C5.16675 -0.000179994 0 5.3704 0 11.9955C0 13.7756 0.30253 15.4886 0.832365 17.1244H8.6337Z"
            fill="#5FDEB7"
        />
    </Svg>
);

export const Drug = (props: any) => (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
        <Path
            d="M33.2276 2.7054C29.53 -0.9018 23.5154 -0.9018 19.8178 2.7054L12 10.3363L20.876 19C22.7028 17.5151 25.0189 16.5854 27.5763 16.5854C29.0431 16.5854 30.439 16.8828 31.709 17.4139L33.2276 15.7945C36.9241 12.1863 36.9241 6.31465 33.2276 2.7054Z"
            fill="#C7FFA6"
        />
        <Path
            d="M19 21.5622L10.2554 13L2.72759 20.3781C-0.909195 23.9391 -0.909195 29.734 2.72759 33.296C6.36533 36.8558 12.3517 36.9237 15.9896 33.3636L17.5156 31.8622C16.9803 30.6387 16.6805 29.294 16.6805 27.881C16.6806 25.4807 17.5719 23.3018 19 21.5622Z"
            fill="#50DDB2"
        />
        <Path d="M19 28C19 32.1277 22.0591 35.4965 26 36V20C22.0591 20.5035 19 23.8721 19 28Z" fill="#C7FFA6" />
        <Path d="M29 20V36C32.9409 35.4965 36 32.1277 36 28C36 23.8722 32.941 20.5035 29 20Z" fill="#50DDB2" />
    </Svg>
);
