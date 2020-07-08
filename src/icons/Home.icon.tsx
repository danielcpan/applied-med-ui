import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const HomeIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon viewBox="0 0 26 23" {...props}>
    <mask id="path-2-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="23">
      <rect width="26" height="23" />
      <path d="M3.30627 10.6027L1.666 12.1005C1.50994 12.243 1.26822 12.253 1.11346 12.1006C0.967189 11.9565 0.957253 11.6989 1.11346 11.5563L1.18533 11.4907L3.36949 9.49611L7.2319 5.96906L10.913 2.60758L12.5533 1.10975C12.7156 0.961459 12.943 0.965391 13.1058 1.10975L13.2321 1.22174L15.5879 3.3108L19.5347 6.81061L23.2437 10.0996L24.8863 11.5563C25.0447 11.6967 25.0309 11.9581 24.8863 12.1006C24.7299 12.2547 24.4919 12.2408 24.3338 12.1006L24.2075 11.9886L22.6361 10.5952V13.6136V18.9042V21.6152C22.6361 21.825 22.4584 22.0001 22.2454 22.0001H19.4099H15.5193C15.3063 22.0001 15.1286 21.825 15.1286 21.6152V20.7253V15.8981V15.4146C15.1286 15.3591 15.1277 15.3036 15.1238 15.2482L15.1238 15.248C15.1211 15.2102 15.1185 15.1724 15.1141 15.1347C15.113 15.1251 15.1121 15.1174 15.1115 15.1114C15.1103 15.1054 15.1089 15.0978 15.1072 15.0881C15.094 15.0149 15.0792 14.9419 15.0593 14.8702C15.0365 14.7876 15.0111 14.7056 14.9796 14.6258C14.9732 14.6096 14.9694 14.5996 14.9674 14.5938C14.9659 14.5906 14.9643 14.5871 14.9624 14.5832L14.9621 14.5826C14.9469 14.5498 14.9317 14.5171 14.915 14.485C14.85 14.3602 14.7767 14.2393 14.6913 14.1269C14.709 14.1503 14.6821 14.1176 14.6587 14.089C14.646 14.0735 14.6343 14.0593 14.6314 14.056C14.6074 14.029 14.5833 14.0021 14.5582 13.9762C14.5079 13.9244 14.4563 13.8737 14.4017 13.8264C14.3743 13.8028 14.3469 13.7791 14.3186 13.7566C14.3106 13.7503 14.3045 13.7454 14.2999 13.7416C14.2952 13.7384 14.2894 13.7344 14.2821 13.7293C14.2227 13.6875 14.1622 13.647 14.0993 13.6104C13.8337 13.4563 13.6284 13.3769 13.289 13.3281C13.3405 13.3355 13.292 13.3301 13.2492 13.3253C13.2275 13.3229 13.2073 13.3206 13.2025 13.3203L13.2023 13.3203C13.1636 13.3176 13.125 13.315 13.0863 13.3141C13.0208 13.3127 12.9553 13.3122 12.8899 13.3156C12.8513 13.3176 12.8126 13.3197 12.7741 13.3235C12.7727 13.3236 12.765 13.3246 12.755 13.326C12.7216 13.3304 12.6627 13.3382 12.7261 13.3281C12.6515 13.34 12.577 13.3535 12.5037 13.372C12.4194 13.3933 12.3356 13.4171 12.254 13.447C12.2529 13.4474 12.248 13.4493 12.2413 13.452C12.2125 13.4633 12.15 13.4879 12.2097 13.462C12.176 13.4766 12.1423 13.4912 12.1093 13.5074C11.9781 13.5712 11.8509 13.6438 11.7329 13.7293C11.7199 13.7388 11.7113 13.7452 11.7068 13.7483C11.6939 13.7586 11.6811 13.769 11.6684 13.7795L11.6663 13.7813C11.6393 13.804 11.6124 13.8266 11.5864 13.8504C11.5331 13.8992 11.4809 13.9492 11.4321 14.0024C11.4077 14.029 11.3832 14.0556 11.36 14.0832C11.3592 14.0843 11.3545 14.0901 11.3485 14.0977C11.3289 14.1227 11.2946 14.1661 11.3306 14.1178C11.2874 14.1757 11.2454 14.2347 11.2074 14.2961C11.1629 14.368 11.1205 14.4414 11.0837 14.5175L11.0827 14.5197C11.0708 14.5442 11.059 14.5687 11.0478 14.5935C11.053 14.5828 11.0378 14.6212 11.0287 14.6442C11.0254 14.6526 11.0229 14.6589 11.0225 14.66C10.9724 14.7992 10.9318 14.9421 10.9078 15.0881C10.9048 15.1081 10.9028 15.1201 10.9021 15.1239C10.9003 15.14 10.8986 15.1562 10.8971 15.1724C10.8938 15.2103 10.8906 15.2483 10.8891 15.2864C10.8876 15.3253 10.8864 15.3642 10.8864 15.4032V15.4369V15.6395V17.6946V21.6152C10.8864 21.825 10.7087 22 10.4957 22H7.66026H3.76963C3.55663 22 3.37891 21.825 3.37891 21.6152V21.4708V17.8644V12.5738V10.5364L3.30627 10.6027ZM4.15838 9.82458C4.15969 9.83718 4.16036 9.84994 4.16036 9.86284V10.0072V13.6136V18.9042V21.2303H6.60508H10.105V20.2034V15.5857C10.105 15.3127 10.1147 15.042 10.1758 14.7736C10.319 14.1453 10.6851 13.5645 11.201 13.1677C12.3081 12.3163 13.9042 12.3471 14.9542 13.2821C15.441 13.7155 15.7773 14.3167 15.8723 14.9575C15.9062 15.1862 15.9101 15.41 15.9101 15.6394V17.6946V21.2303H18.3548H21.8547V17.8644V12.5738V9.90225L21.8516 9.89954L17.9049 6.39973L14.1959 3.11072L12.8336 1.90263L10.8498 3.71417L6.98736 7.24122L4.15838 9.82458Z" />
    </mask>
    <path d="M3.30627 10.6027L1.666 12.1005C1.50994 12.243 1.26822 12.253 1.11346 12.1006C0.967189 11.9565 0.957253 11.6989 1.11346 11.5563L1.18533 11.4907L3.36949 9.49611L7.2319 5.96906L10.913 2.60758L12.5533 1.10975C12.7156 0.961459 12.943 0.965391 13.1058 1.10975L13.2321 1.22174L15.5879 3.3108L19.5347 6.81061L23.2437 10.0996L24.8863 11.5563C25.0447 11.6967 25.0309 11.9581 24.8863 12.1006C24.7299 12.2547 24.4919 12.2408 24.3338 12.1006L24.2075 11.9886L22.6361 10.5952V13.6136V18.9042V21.6152C22.6361 21.825 22.4584 22.0001 22.2454 22.0001H19.4099H15.5193C15.3063 22.0001 15.1286 21.825 15.1286 21.6152V20.7253V15.8981V15.4146C15.1286 15.3591 15.1277 15.3036 15.1238 15.2482L15.1238 15.248C15.1211 15.2102 15.1185 15.1724 15.1141 15.1347C15.113 15.1251 15.1121 15.1174 15.1115 15.1114C15.1103 15.1054 15.1089 15.0978 15.1072 15.0881C15.094 15.0149 15.0792 14.9419 15.0593 14.8702C15.0365 14.7876 15.0111 14.7056 14.9796 14.6258C14.9732 14.6096 14.9694 14.5996 14.9674 14.5938C14.9659 14.5906 14.9643 14.5871 14.9624 14.5832L14.9621 14.5826C14.9469 14.5498 14.9317 14.5171 14.915 14.485C14.85 14.3602 14.7767 14.2393 14.6913 14.1269C14.709 14.1503 14.6821 14.1176 14.6587 14.089C14.646 14.0735 14.6343 14.0593 14.6314 14.056C14.6074 14.029 14.5833 14.0021 14.5582 13.9762C14.5079 13.9244 14.4563 13.8737 14.4017 13.8264C14.3743 13.8028 14.3469 13.7791 14.3186 13.7566C14.3106 13.7503 14.3045 13.7454 14.2999 13.7416C14.2952 13.7384 14.2894 13.7344 14.2821 13.7293C14.2227 13.6875 14.1622 13.647 14.0993 13.6104C13.8337 13.4563 13.6284 13.3769 13.289 13.3281C13.3405 13.3355 13.292 13.3301 13.2492 13.3253C13.2275 13.3229 13.2073 13.3206 13.2025 13.3203L13.2023 13.3203C13.1636 13.3176 13.125 13.315 13.0863 13.3141C13.0208 13.3127 12.9553 13.3122 12.8899 13.3156C12.8513 13.3176 12.8126 13.3197 12.7741 13.3235C12.7727 13.3236 12.765 13.3246 12.755 13.326C12.7216 13.3304 12.6627 13.3382 12.7261 13.3281C12.6515 13.34 12.577 13.3535 12.5037 13.372C12.4194 13.3933 12.3356 13.4171 12.254 13.447C12.2529 13.4474 12.248 13.4493 12.2413 13.452C12.2125 13.4633 12.15 13.4879 12.2097 13.462C12.176 13.4766 12.1423 13.4912 12.1093 13.5074C11.9781 13.5712 11.8509 13.6438 11.7329 13.7293C11.7199 13.7388 11.7113 13.7452 11.7068 13.7483C11.6939 13.7586 11.6811 13.769 11.6684 13.7795L11.6663 13.7813C11.6393 13.804 11.6124 13.8266 11.5864 13.8504C11.5331 13.8992 11.4809 13.9492 11.4321 14.0024C11.4077 14.029 11.3832 14.0556 11.36 14.0832C11.3592 14.0843 11.3545 14.0901 11.3485 14.0977C11.3289 14.1227 11.2946 14.1661 11.3306 14.1178C11.2874 14.1757 11.2454 14.2347 11.2074 14.2961C11.1629 14.368 11.1205 14.4414 11.0837 14.5175L11.0827 14.5197C11.0708 14.5442 11.059 14.5687 11.0478 14.5935C11.053 14.5828 11.0378 14.6212 11.0287 14.6442C11.0254 14.6526 11.0229 14.6589 11.0225 14.66C10.9724 14.7992 10.9318 14.9421 10.9078 15.0881C10.9048 15.1081 10.9028 15.1201 10.9021 15.1239C10.9003 15.14 10.8986 15.1562 10.8971 15.1724C10.8938 15.2103 10.8906 15.2483 10.8891 15.2864C10.8876 15.3253 10.8864 15.3642 10.8864 15.4032V15.4369V15.6395V17.6946V21.6152C10.8864 21.825 10.7087 22 10.4957 22H7.66026H3.76963C3.55663 22 3.37891 21.825 3.37891 21.6152V21.4708V17.8644V12.5738V10.5364L3.30627 10.6027ZM4.15838 9.82458C4.15969 9.83718 4.16036 9.84994 4.16036 9.86284V10.0072V13.6136V18.9042V21.2303H6.60508H10.105V20.2034V15.5857C10.105 15.3127 10.1147 15.042 10.1758 14.7736C10.319 14.1453 10.6851 13.5645 11.201 13.1677C12.3081 12.3163 13.9042 12.3471 14.9542 13.2821C15.441 13.7155 15.7773 14.3167 15.8723 14.9575C15.9062 15.1862 15.9101 15.41 15.9101 15.6394V17.6946V21.2303H18.3548H21.8547V17.8644V12.5738V9.90225L21.8516 9.89954L17.9049 6.39973L14.1959 3.11072L12.8336 1.90263L10.8498 3.71417L6.98736 7.24122L4.15838 9.82458Z" />
    <path
      d="M1.666 12.1005L1.83458 12.2851L1.83458 12.2851L1.666 12.1005ZM3.30627 10.6027L3.47485 10.7873L3.47485 10.7873L3.30627 10.6027ZM1.11346 12.1006L1.28891 11.9225L1.2889 11.9225L1.11346 12.1006ZM1.11346 11.5563L1.28203 11.7409L1.28203 11.7409L1.11346 11.5563ZM1.18533 11.4907L1.3539 11.6753L1.35391 11.6753L1.18533 11.4907ZM3.36949 9.49611L3.20091 9.3115L3.20091 9.3115L3.36949 9.49611ZM7.2319 5.96906L7.40048 6.15367H7.40048L7.2319 5.96906ZM10.913 2.60758L10.7444 2.42297V2.42297L10.913 2.60758ZM12.5533 1.10975L12.7218 1.29436L12.7219 1.29433L12.5533 1.10975ZM13.1058 1.10975L13.2717 0.922721L13.2717 0.922679L13.1058 1.10975ZM13.2321 1.22174L13.0662 1.40877L13.0662 1.40879L13.2321 1.22174ZM15.5879 3.3108L15.7538 3.12375L15.5879 3.3108ZM19.5347 6.81061L19.7005 6.62356V6.62356L19.5347 6.81061ZM23.2437 10.0996L23.4095 9.91257L23.4095 9.91256L23.2437 10.0996ZM24.8863 11.5563L24.7205 11.7433L24.7205 11.7433L24.8863 11.5563ZM24.8863 12.1006L25.0617 12.2787L25.0618 12.2787L24.8863 12.1006ZM24.3338 12.1006L24.4996 11.9136L24.4996 11.9135L24.3338 12.1006ZM24.2075 11.9886L24.0416 12.1757L24.0416 12.1757L24.2075 11.9886ZM22.6361 10.5952L22.802 10.4081L22.3861 10.0394V10.5952H22.6361ZM15.1238 15.2482L14.8744 15.2654L14.8744 15.2657L15.1238 15.2482ZM15.1238 15.248L15.3732 15.2308L15.3732 15.2305L15.1238 15.248ZM15.1141 15.1347L14.8658 15.1637V15.1637L15.1141 15.1347ZM15.1115 15.1114L15.3601 15.0851L15.359 15.0747L15.357 15.0644L15.1115 15.1114ZM15.1072 15.0881L15.3532 15.0439L15.3532 15.0437L15.1072 15.0881ZM15.0593 14.8702L14.8183 14.9368L14.8184 14.9369L15.0593 14.8702ZM14.9796 14.6258L14.747 14.7174L14.7471 14.7175L14.9796 14.6258ZM14.9674 14.5938L15.2032 14.5107L15.199 14.4989L15.1937 14.4876L14.9674 14.5938ZM14.9624 14.5832L15.1891 14.4777L15.1891 14.4776L14.9624 14.5832ZM14.9621 14.5826L14.7355 14.688L14.7355 14.6881L14.9621 14.5826ZM14.915 14.485L15.1367 14.3696L15.1367 14.3695L14.915 14.485ZM14.6913 14.1269L14.8904 13.9756L14.492 14.2778L14.6913 14.1269ZM14.6587 14.089L14.4655 14.2476L14.4655 14.2476L14.6587 14.089ZM14.6314 14.056L14.4448 14.2224L14.4449 14.2225L14.6314 14.056ZM14.5582 13.9762L14.3788 14.1504L14.379 14.1506L14.5582 13.9762ZM14.4017 13.8264L14.5653 13.6374L14.5651 13.6372L14.4017 13.8264ZM14.3186 13.7566L14.1633 13.9526L14.1634 13.9526L14.3186 13.7566ZM14.2999 13.7416L14.4574 13.5476L14.4498 13.5413L14.4416 13.5357L14.2999 13.7416ZM14.2821 13.7293L14.4258 13.5247L14.4258 13.5247L14.2821 13.7293ZM14.0993 13.6104L13.9738 13.8267L13.9738 13.8267L14.0993 13.6104ZM13.289 13.3281L13.3246 13.0806L13.2534 13.5755L13.289 13.3281ZM13.2492 13.3253L13.277 13.0768L13.277 13.0768L13.2492 13.3253ZM13.2025 13.3203L13.2192 13.0708L13.2181 13.0708L13.2025 13.3203ZM13.2023 13.3203L13.1853 13.5697L13.1867 13.5698L13.2023 13.3203ZM13.0863 13.3141L13.0807 13.5641L13.0808 13.5641L13.0863 13.3141ZM12.8899 13.3156L12.8768 13.066L12.8767 13.066L12.8899 13.3156ZM12.7741 13.3235L12.7496 13.0747L12.7493 13.0747L12.7741 13.3235ZM12.755 13.326L12.7221 13.0781H12.7221L12.755 13.326ZM12.7261 13.3281L12.7654 13.575L12.6868 13.0812L12.7261 13.3281ZM12.5037 13.372L12.4425 13.1296L12.4425 13.1296L12.5037 13.372ZM12.254 13.447L12.3392 13.682L12.3399 13.6818L12.254 13.447ZM12.2413 13.452L12.3329 13.6846L12.3329 13.6846L12.2413 13.452ZM12.2097 13.462L12.3092 13.6913L12.1103 13.2326L12.2097 13.462ZM12.1093 13.5074L12.2187 13.7321L12.2188 13.7321L12.1093 13.5074ZM11.7329 13.7293L11.5863 13.5268L11.5847 13.528L11.7329 13.7293ZM11.7068 13.7483L11.5612 13.5447L11.5513 13.5526L11.7068 13.7483ZM11.6684 13.7795L11.509 13.5869L11.5074 13.5882L11.6684 13.7795ZM11.6663 13.7813L11.8272 13.9726L11.8273 13.9726L11.6663 13.7813ZM11.5864 13.8504L11.7553 14.0348L11.7554 14.0347L11.5864 13.8504ZM11.4321 14.0024L11.6161 14.1717L11.6163 14.1715L11.4321 14.0024ZM11.36 14.0832L11.551 14.2446L11.5514 14.2441L11.36 14.0832ZM11.3485 14.0977L11.5448 14.2526L11.5448 14.2526L11.3485 14.0977ZM11.3306 14.1178L11.531 14.2674L11.1303 13.9682L11.3306 14.1178ZM11.2074 14.2961L10.9948 14.1646L10.9948 14.1646L11.2074 14.2961ZM11.0837 14.5175L10.8587 14.4086L10.8585 14.409L11.0837 14.5175ZM11.0827 14.5197L11.3078 14.6283L11.3079 14.6282L11.0827 14.5197ZM11.0478 14.5935L10.82 14.4907L11.2731 14.7018L11.0478 14.5935ZM11.0287 14.6442L10.7962 14.5523L10.7962 14.5523L11.0287 14.6442ZM11.0225 14.66L11.2577 14.7447L11.258 14.744L11.0225 14.66ZM10.9078 15.0881L10.6611 15.0476L10.6607 15.0501L10.9078 15.0881ZM10.9021 15.1239L10.6566 15.0767L10.6548 15.0862L10.6537 15.0958L10.9021 15.1239ZM10.8971 15.1724L10.6482 15.1491L10.648 15.1509L10.8971 15.1724ZM10.8891 15.2864L10.6393 15.2767L10.6393 15.2767L10.8891 15.2864ZM3.37891 10.5364H3.62891V9.96952L3.21033 10.3518L3.37891 10.5364ZM4.15838 9.82458L3.9898 9.63997L3.89668 9.725L3.90972 9.85042L4.15838 9.82458ZM4.16036 21.2303H3.91036V21.4803H4.16036V21.2303ZM10.105 21.2303V21.4803H10.355V21.2303H10.105ZM10.1758 14.7736L10.4196 14.8291V14.8291L10.1758 14.7736ZM11.201 13.1677L11.3534 13.3659L11.3534 13.3659L11.201 13.1677ZM14.9542 13.2821L14.788 13.4688L14.788 13.4688L14.9542 13.2821ZM15.8723 14.9575L15.625 14.9942L15.625 14.9942L15.8723 14.9575ZM15.9101 21.2303H15.6601V21.4803H15.9101V21.2303ZM21.8547 21.2303V21.4803H22.1047V21.2303H21.8547ZM21.8547 9.90225H22.1047V9.7898L22.0206 9.7152L21.8547 9.90225ZM21.8516 9.89954L22.0175 9.71249H22.0175L21.8516 9.89954ZM17.9049 6.39973L18.0708 6.21268L17.9049 6.39973ZM14.1959 3.11072L14.3618 2.92367L14.1959 3.11072ZM12.8336 1.90263L12.9994 1.71558L12.8311 1.56632L12.665 1.71802L12.8336 1.90263ZM10.8498 3.71417L11.0184 3.89878V3.89878L10.8498 3.71417ZM6.98736 7.24122L6.81878 7.05661H6.81878L6.98736 7.24122ZM1.83458 12.2851L3.47485 10.7873L3.13769 10.4181L1.49742 11.9159L1.83458 12.2851ZM0.938006 12.2787C1.19762 12.5344 1.59122 12.5074 1.83458 12.2851L1.49743 11.9159C1.42865 11.9787 1.33881 11.9716 1.28891 11.9225L0.938006 12.2787ZM0.944894 11.3716C0.671842 11.621 0.700651 12.0449 0.938023 12.2787L1.2889 11.9225C1.26641 11.9003 1.2505 11.8645 1.25001 11.8248C1.24953 11.7862 1.26331 11.758 1.28203 11.7409L0.944894 11.3716ZM1.01675 11.306L0.944887 11.3717L1.28203 11.7409L1.3539 11.6753L1.01675 11.306ZM3.20091 9.3115L1.01674 11.306L1.35391 11.6753L3.53807 9.68071L3.20091 9.3115ZM7.06332 5.78445L3.20091 9.3115L3.53807 9.68072L7.40048 6.15367L7.06332 5.78445ZM10.7444 2.42297L7.06332 5.78445L7.40048 6.15367L11.0816 2.79219L10.7444 2.42297ZM12.3847 0.925135L10.7444 2.42297L11.0816 2.79219L12.7218 1.29436L12.3847 0.925135ZM13.2717 0.922679C13.0174 0.697202 12.6455 0.686875 12.3847 0.925155L12.7219 1.29433C12.7857 1.23604 12.8687 1.23358 12.94 1.29681L13.2717 0.922679ZM13.398 1.03472L13.2717 0.922721L12.9399 1.29677L13.0662 1.40877L13.398 1.03472ZM15.7538 3.12375L13.398 1.03469L13.0662 1.40879L15.4221 3.49785L15.7538 3.12375ZM19.7005 6.62356L15.7538 3.12375L15.4221 3.49785L19.3688 6.99766L19.7005 6.62356ZM23.4095 9.91256L19.7005 6.62356L19.3688 6.99766L23.0778 10.2867L23.4095 9.91256ZM25.0522 11.3693L23.4095 9.91257L23.0778 10.2867L24.7205 11.7433L25.0522 11.3693ZM25.0618 12.2787C25.2941 12.0498 25.3343 11.6194 25.0522 11.3692L24.7205 11.7433C24.7367 11.7578 24.7507 11.7838 24.75 11.8234C24.7493 11.8646 24.7325 11.9012 24.7109 11.9225L25.0618 12.2787ZM24.1679 12.2876C24.4092 12.5017 24.7977 12.5387 25.0617 12.2787L24.7109 11.9225C24.662 11.9706 24.5746 11.98 24.4996 11.9136L24.1679 12.2876ZM24.0416 12.1757L24.1679 12.2877L24.4996 11.9135L24.3733 11.8016L24.0416 12.1757ZM22.4702 10.7822L24.0416 12.1757L24.3733 11.8016L22.802 10.4081L22.4702 10.7822ZM22.8861 13.6136V10.5952H22.3861V13.6136H22.8861ZM22.8861 18.9042V13.6136H22.3861V18.9042H22.8861ZM22.8861 21.6152V18.9042H22.3861V21.6152H22.8861ZM22.2454 22.2501C22.5929 22.2501 22.8861 21.9666 22.8861 21.6152H22.3861C22.3861 21.6834 22.3239 21.7501 22.2454 21.7501V22.2501ZM19.4099 22.2501H22.2454V21.7501H19.4099V22.2501ZM15.5193 22.2501H19.4099V21.7501H15.5193V22.2501ZM14.8786 21.6152C14.8786 21.9666 15.1718 22.2501 15.5193 22.2501V21.7501C15.4408 21.7501 15.3786 21.6834 15.3786 21.6152H14.8786ZM14.8786 20.7253V21.6152H15.3786V20.7253H14.8786ZM14.8786 15.8981V20.7253H15.3786V15.8981H14.8786ZM14.8786 15.4146V15.8981H15.3786V15.4146H14.8786ZM14.8744 15.2657C14.8777 15.3125 14.8786 15.3613 14.8786 15.4146H15.3786C15.3786 15.3568 15.3777 15.2946 15.3732 15.2307L14.8744 15.2657ZM14.8744 15.2652L14.8744 15.2654L15.3732 15.231L15.3732 15.2308L14.8744 15.2652ZM14.8658 15.1637C14.8694 15.1947 14.8717 15.2267 14.8744 15.2654L15.3732 15.2305C15.3706 15.1937 15.3676 15.1501 15.3624 15.1057L14.8658 15.1637ZM14.8629 15.1377C14.8636 15.1449 14.8646 15.1535 14.8658 15.1637L15.3624 15.1057C15.3613 15.0966 15.3606 15.0899 15.3601 15.0851L14.8629 15.1377ZM14.8611 15.1322C14.863 15.1426 14.8646 15.1512 14.8659 15.1584L15.357 15.0644C15.3561 15.0597 15.3549 15.053 15.3532 15.0439L14.8611 15.1322ZM14.8184 14.9369C14.8353 14.998 14.8485 15.0624 14.8611 15.1324L15.3532 15.0437C15.3395 14.9674 15.3231 14.8859 15.3003 14.8036L14.8184 14.9369ZM14.7471 14.7175C14.7741 14.786 14.7968 14.8587 14.8183 14.9368L15.3003 14.8036C15.2762 14.7166 15.2482 14.6252 15.2121 14.534L14.7471 14.7175ZM14.7316 14.6769C14.7353 14.6873 14.7405 14.701 14.747 14.7174L15.2122 14.5341C15.2092 14.5266 15.2071 14.521 15.2055 14.5169C15.2047 14.5148 15.2041 14.5133 15.2037 14.5122C15.2033 14.511 15.2031 14.5106 15.2032 14.5107L14.7316 14.6769ZM14.7358 14.6886C14.7377 14.6927 14.7394 14.6965 14.7411 14.7L15.1937 14.4876C15.1924 14.4847 15.1908 14.4814 15.1891 14.4777L14.7358 14.6886ZM14.7355 14.6881L14.7358 14.6887L15.1891 14.4776L15.1888 14.477L14.7355 14.6881ZM14.6932 14.6004C14.7069 14.6268 14.7199 14.6544 14.7355 14.688L15.1888 14.4771C15.174 14.4452 15.1564 14.4074 15.1367 14.3696L14.6932 14.6004ZM14.4923 14.2782C14.5672 14.3768 14.6331 14.4851 14.6933 14.6005L15.1367 14.3695C15.0669 14.2354 14.9863 14.1018 14.8904 13.9756L14.4923 14.2782ZM14.4655 14.2476C14.4767 14.2613 14.4905 14.2781 14.4992 14.2884C14.5014 14.291 14.5042 14.2944 14.5071 14.2976C14.5083 14.299 14.511 14.3021 14.5143 14.3057C14.5158 14.3073 14.5194 14.311 14.524 14.3154C14.5262 14.3175 14.5305 14.3215 14.536 14.3262C14.5394 14.329 14.5529 14.3405 14.5725 14.3517C14.5812 14.3567 14.6045 14.3696 14.6372 14.3776C14.6636 14.3841 14.7526 14.4013 14.8406 14.3396C14.9343 14.2738 14.946 14.1771 14.947 14.142C14.948 14.1041 14.9401 14.0752 14.9371 14.065C14.9303 14.0415 14.9214 14.0245 14.9194 14.0206C14.916 14.0139 14.9129 14.0087 14.9112 14.0059C14.9057 13.9966 14.9004 13.9893 14.8998 13.9885C14.8965 13.9838 14.8931 13.9792 14.8906 13.976L14.492 14.2778C14.494 14.2805 14.4936 14.28 14.4921 14.2779C14.4916 14.2772 14.4907 14.2759 14.4894 14.274C14.4885 14.2726 14.4858 14.2686 14.4826 14.2632C14.481 14.2606 14.478 14.2555 14.4746 14.2489C14.4726 14.2451 14.4638 14.2281 14.457 14.2048C14.4541 14.1946 14.4461 14.1657 14.4472 14.1278C14.4482 14.0927 14.4598 13.996 14.5535 13.9302C14.6415 13.8685 14.7305 13.8857 14.7569 13.8922C14.7896 13.9002 14.8128 13.9131 14.8215 13.9181C14.841 13.9293 14.8545 13.9407 14.8578 13.9435C14.8633 13.9481 14.8674 13.9519 14.8695 13.954C14.8739 13.9582 14.8772 13.9616 14.8783 13.9628C14.881 13.9657 14.8828 13.9677 14.8829 13.9679C14.8835 13.9685 14.8833 13.9683 14.8817 13.9665C14.8755 13.9591 14.8642 13.9453 14.852 13.9304L14.4655 14.2476ZM14.4449 14.2225C14.4439 14.2214 14.4433 14.2207 14.443 14.2204C14.4427 14.22 14.4425 14.2198 14.4425 14.2198C14.4425 14.2198 14.4426 14.2199 14.4427 14.22C14.4429 14.2202 14.4431 14.2205 14.4434 14.2208C14.4446 14.2222 14.4463 14.2243 14.4486 14.2271C14.4532 14.2327 14.459 14.2398 14.4655 14.2476L14.852 13.9304C14.8424 13.9188 14.8254 13.8979 14.8178 13.8895L14.4449 14.2225ZM14.379 14.1506C14.3997 14.1719 14.4201 14.1947 14.4448 14.2224L14.8179 13.8896C14.7946 13.8634 14.7669 13.8323 14.7373 13.8019L14.379 14.1506ZM14.2381 14.0155C14.285 14.056 14.3308 14.101 14.3788 14.1504L14.7375 13.802C14.6849 13.7479 14.6277 13.6914 14.5653 13.6374L14.2381 14.0155ZM14.1634 13.9526C14.1868 13.9711 14.2099 13.9911 14.2383 14.0156L14.5651 13.6372C14.5387 13.6144 14.5071 13.587 14.4738 13.5606L14.1634 13.9526ZM14.1423 13.9357C14.148 13.9403 14.1549 13.9459 14.1633 13.9526L14.4738 13.5607C14.4664 13.5547 14.4611 13.5505 14.4574 13.5476L14.1423 13.9357ZM14.1384 13.9339C14.1461 13.9392 14.1526 13.9438 14.1581 13.9476L14.4416 13.5357C14.4378 13.5331 14.4326 13.5295 14.4258 13.5247L14.1384 13.9339ZM13.9738 13.8267C14.0277 13.858 14.0815 13.8939 14.1385 13.9339L14.4258 13.5247C14.3638 13.4812 14.2967 13.4359 14.2247 13.3942L13.9738 13.8267ZM13.2534 13.5755C13.5586 13.6194 13.7336 13.6873 13.9738 13.8267L14.2248 13.3942C13.9339 13.2254 13.6983 13.1344 13.3246 13.0806L13.2534 13.5755ZM13.2214 13.5737C13.2414 13.576 13.2673 13.5789 13.2813 13.5802C13.2831 13.5804 13.2919 13.5812 13.3011 13.5816C13.3032 13.5816 13.3108 13.5819 13.3205 13.5816C13.3244 13.5814 13.3362 13.5809 13.351 13.5785C13.3581 13.5774 13.373 13.5747 13.3911 13.5686C13.4018 13.565 13.4508 13.5487 13.4944 13.5018C13.5198 13.4745 13.5478 13.4316 13.5577 13.3735C13.5677 13.3144 13.5551 13.2626 13.5373 13.225C13.5075 13.1617 13.46 13.1304 13.4502 13.1239C13.4217 13.1048 13.3954 13.0962 13.3929 13.0954C13.3789 13.0905 13.3673 13.088 13.3656 13.0876C13.3513 13.0844 13.332 13.0817 13.3246 13.0806L13.2534 13.5755C13.2717 13.5782 13.2657 13.5776 13.2554 13.5753C13.2543 13.5751 13.2431 13.5726 13.2293 13.5678C13.2268 13.567 13.2007 13.5585 13.1721 13.5394C13.1624 13.5329 13.115 13.5016 13.0851 13.4383C13.0674 13.4007 13.0547 13.349 13.0647 13.2899C13.0746 13.2318 13.1026 13.1889 13.1281 13.1615C13.1716 13.1147 13.2206 13.0984 13.2313 13.0948C13.2494 13.0887 13.2642 13.0861 13.2713 13.0849C13.286 13.0825 13.2976 13.0821 13.3015 13.0819C13.3108 13.0816 13.318 13.0818 13.3196 13.0819C13.3266 13.0822 13.3314 13.0827 13.3277 13.0823C13.3196 13.0816 13.2999 13.0794 13.277 13.0768L13.2214 13.5737ZM13.1857 13.5697C13.1842 13.5696 13.1832 13.5695 13.1828 13.5695C13.1825 13.5695 13.1823 13.5695 13.1822 13.5694C13.1821 13.5694 13.182 13.5694 13.182 13.5694C13.182 13.5694 13.1821 13.5694 13.1824 13.5695C13.1827 13.5695 13.1831 13.5695 13.1835 13.5696C13.1856 13.5698 13.1886 13.5701 13.1925 13.5705C13.2004 13.5714 13.2105 13.5725 13.2215 13.5737L13.277 13.0768C13.2606 13.075 13.2313 13.0717 13.2192 13.0708L13.1857 13.5697ZM13.1867 13.5698L13.1869 13.5698L13.2181 13.0708L13.2179 13.0708L13.1867 13.5698ZM13.0808 13.5641C13.1128 13.5648 13.1457 13.567 13.1853 13.5697L13.2193 13.0708C13.1816 13.0683 13.1372 13.0652 13.0918 13.0642L13.0808 13.5641ZM12.903 13.5653C12.9589 13.5623 13.017 13.5627 13.0807 13.5641L13.0918 13.0642C13.0246 13.0627 12.9517 13.062 12.8768 13.066L12.903 13.5653ZM12.7987 13.5723C12.8305 13.5691 12.8635 13.5673 12.903 13.5653L12.8767 13.066C12.8391 13.0679 12.7947 13.0702 12.7496 13.0747L12.7987 13.5723ZM12.7878 13.5738C12.7929 13.5731 12.7971 13.5726 12.8002 13.5722C12.8018 13.572 12.8028 13.5718 12.8033 13.5718C12.8036 13.5717 12.8036 13.5717 12.8032 13.5718C12.8031 13.5718 12.8027 13.5718 12.8021 13.5719C12.8017 13.5719 12.8005 13.5721 12.799 13.5722L12.7493 13.0747C12.7426 13.0754 12.7279 13.0774 12.7221 13.0781L12.7878 13.5738ZM12.6867 13.0812C12.6739 13.0832 12.6575 13.0859 12.6463 13.0883C12.6443 13.0887 12.639 13.0899 12.6325 13.0917C12.6295 13.0925 12.6228 13.0944 12.6145 13.0973C12.6138 13.0975 12.5838 13.1072 12.5523 13.1298C12.5453 13.1348 12.4781 13.1801 12.4552 13.2732C12.4408 13.3315 12.4477 13.3942 12.4766 13.4492C12.5023 13.4982 12.5377 13.5266 12.559 13.5408C12.5981 13.567 12.6348 13.575 12.6431 13.5769C12.6572 13.5801 12.6687 13.5814 12.6744 13.5819C12.6936 13.5837 12.7094 13.5828 12.7096 13.5828C12.7208 13.5823 12.7318 13.581 12.7323 13.5809C12.7463 13.5793 12.7726 13.5758 12.7878 13.5738L12.7221 13.0781C12.704 13.0805 12.6841 13.0832 12.6761 13.0841C12.6712 13.0846 12.6783 13.0837 12.6875 13.0833C12.6895 13.0832 12.693 13.083 12.6974 13.083C12.7007 13.083 12.7099 13.083 12.7217 13.0841C12.7274 13.0847 12.7388 13.0859 12.7529 13.0891C12.7612 13.091 12.7978 13.099 12.8369 13.1252C12.8582 13.1394 12.8936 13.1678 12.9193 13.2167C12.9482 13.2717 12.955 13.3344 12.9407 13.3927C12.9178 13.4859 12.8506 13.5311 12.8436 13.5362C12.8122 13.5587 12.7822 13.5683 12.7817 13.5685C12.7735 13.5714 12.767 13.5732 12.7641 13.574C12.758 13.5757 12.7533 13.5767 12.752 13.577C12.7465 13.5782 12.7465 13.578 12.7654 13.575L12.6867 13.0812ZM12.565 13.6144C12.6278 13.5985 12.6939 13.5864 12.7654 13.575L12.6868 13.0812C12.609 13.0936 12.5262 13.1085 12.4425 13.1296L12.565 13.6144ZM12.3399 13.6818C12.4103 13.656 12.485 13.6346 12.565 13.6144L12.4425 13.1296C12.3539 13.152 12.2609 13.1783 12.168 13.2122L12.3399 13.6818ZM12.3329 13.6846C12.3363 13.6832 12.339 13.6822 12.341 13.6814C12.342 13.681 12.3426 13.6808 12.3428 13.6807C12.343 13.6806 12.3428 13.6807 12.3425 13.6808C12.3425 13.6808 12.3411 13.6813 12.3392 13.682L12.1687 13.212C12.1635 13.2139 12.1532 13.218 12.1497 13.2194L12.3329 13.6846ZM12.1102 13.2326C12.1017 13.2364 12.0797 13.2457 12.0642 13.2543C12.0629 13.2551 12.0487 13.2627 12.0328 13.2748C12.0319 13.2755 11.9964 13.3007 11.9695 13.3462C11.9563 13.3686 11.9186 13.4403 11.9424 13.5346C11.9694 13.6416 12.051 13.6892 12.0917 13.7055C12.1305 13.721 12.1636 13.7228 12.1754 13.7233C12.1908 13.7239 12.2031 13.7229 12.2099 13.7222C12.2235 13.7208 12.2341 13.7186 12.2384 13.7177C12.2479 13.7156 12.2553 13.7134 12.2578 13.7126C12.2674 13.7097 12.2766 13.7063 12.2787 13.7056C12.2938 13.7 12.3199 13.6897 12.3329 13.6846L12.1497 13.2194C12.1339 13.2256 12.1144 13.2332 12.1059 13.2364C12.1021 13.2378 12.1068 13.2359 12.114 13.2338C12.1158 13.2332 12.1227 13.2311 12.1319 13.2291C12.136 13.2283 12.1464 13.2261 12.1599 13.2247C12.1667 13.224 12.1789 13.2231 12.1942 13.2236C12.206 13.2241 12.2391 13.2259 12.2778 13.2414C12.3185 13.2577 12.4002 13.3053 12.4272 13.4122C12.451 13.5066 12.4132 13.5782 12.4 13.6006C12.3731 13.646 12.3377 13.6711 12.3369 13.6718C12.3212 13.6838 12.3074 13.6912 12.3067 13.6916C12.2953 13.6979 12.2879 13.7006 12.3092 13.6913L12.1102 13.2326ZM12.2188 13.7321C12.2461 13.7188 12.2747 13.7063 12.3092 13.6913L12.1103 13.2326C12.0774 13.2469 12.0386 13.2637 11.9997 13.2826L12.2188 13.7321ZM11.8795 13.9318C11.9831 13.8568 12.0971 13.7913 12.2187 13.7321L11.9998 13.2826C11.8591 13.3511 11.7187 13.4309 11.5863 13.5268L11.8795 13.9318ZM11.8523 13.9517C11.8583 13.9474 11.8683 13.94 11.8811 13.9306L11.5847 13.528C11.5716 13.5376 11.5642 13.543 11.5614 13.545L11.8523 13.9517ZM11.8279 13.972C11.8392 13.9626 11.8507 13.9533 11.8624 13.944L11.5513 13.5526C11.5371 13.5639 11.523 13.5753 11.509 13.5869L11.8279 13.972ZM11.8273 13.9726L11.8294 13.9707L11.5074 13.5882L11.5053 13.59L11.8273 13.9726ZM11.7554 14.0347C11.7767 14.0151 11.7995 13.9959 11.8272 13.9726L11.5054 13.59C11.4791 13.6121 11.448 13.6381 11.4174 13.6662L11.7554 14.0347ZM11.6163 14.1715C11.6581 14.1259 11.7044 14.0814 11.7553 14.0348L11.4175 13.6661C11.3619 13.7171 11.3037 13.7726 11.2479 13.8334L11.6163 14.1715ZM11.5514 14.2441C11.5705 14.2214 11.5912 14.1987 11.6161 14.1717L11.2481 13.8332C11.2241 13.8593 11.196 13.8898 11.1686 13.9224L11.5514 14.2441ZM11.5448 14.2526C11.5478 14.2487 11.5503 14.2456 11.5522 14.2432C11.5531 14.242 11.5537 14.2413 11.554 14.2409C11.5542 14.2407 11.5541 14.2408 11.5539 14.2411C11.5537 14.2413 11.5535 14.2416 11.5531 14.242C11.5528 14.2424 11.552 14.2434 11.551 14.2446L11.1691 13.9219C11.1646 13.9272 11.1555 13.9388 11.1522 13.9429L11.5448 14.2526ZM11.1303 13.9682C11.1231 13.9779 11.1136 13.9907 11.1073 14C11.1062 14.0017 11.1034 14.006 11.1001 14.0116C11.0985 14.0142 11.0953 14.0197 11.0916 14.027C11.0907 14.0288 11.0784 14.052 11.0712 14.0838C11.0692 14.0922 11.0546 14.1505 11.0781 14.2198C11.0925 14.2625 11.1232 14.3135 11.1796 14.3498C11.234 14.3849 11.2886 14.3908 11.3246 14.3894C11.386 14.387 11.429 14.3622 11.4367 14.3579C11.4518 14.3495 11.4628 14.3413 11.4679 14.3373C11.4785 14.3291 11.4862 14.3218 11.4887 14.3193C11.4923 14.3159 11.495 14.313 11.4966 14.3113C11.5046 14.3029 11.5118 14.294 11.5119 14.2939C11.5204 14.2835 11.5359 14.2639 11.5448 14.2526L11.1523 13.9429C11.1415 13.9565 11.13 13.971 11.1255 13.9766C11.1223 13.9804 11.1271 13.9743 11.1339 13.9672C11.1354 13.9656 11.138 13.9629 11.1414 13.9596C11.1439 13.9572 11.1514 13.95 11.162 13.9418C11.1671 13.9379 11.178 13.9297 11.1931 13.9213C11.2007 13.917 11.2437 13.8922 11.3051 13.8898C11.3411 13.8884 11.3957 13.8944 11.4501 13.9294C11.5065 13.9657 11.5372 14.0167 11.5516 14.0594C11.5751 14.1287 11.5605 14.1869 11.5585 14.1954C11.5513 14.2271 11.539 14.2502 11.5382 14.2519C11.5346 14.259 11.5314 14.2644 11.53 14.2669C11.5269 14.2721 11.5243 14.2759 11.5236 14.2771C11.5205 14.2817 11.5202 14.2818 11.531 14.2674L11.1303 13.9682ZM11.42 14.4276C11.4525 14.375 11.4897 14.3227 11.531 14.2674L11.1303 13.9682C11.0851 14.0287 11.0383 14.0943 10.9948 14.1646L11.42 14.4276ZM11.3088 14.6263C11.3404 14.5609 11.378 14.4956 11.4201 14.4276L10.9948 14.1646C10.9479 14.2404 10.9007 14.3218 10.8587 14.4086L11.3088 14.6263ZM11.3079 14.6282L11.3089 14.626L10.8585 14.409L10.8574 14.4112L11.3079 14.6282ZM11.2757 14.6963C11.2854 14.6749 11.2958 14.6533 11.3078 14.6283L10.8575 14.411C10.8459 14.4351 10.8327 14.4625 10.82 14.4907L11.2757 14.6963ZM11.2612 14.7361C11.2656 14.7249 11.2721 14.7084 11.2769 14.696C11.2788 14.6912 11.2822 14.6823 11.2848 14.6748C11.2854 14.673 11.2873 14.6675 11.2892 14.6607C11.2899 14.6581 11.2925 14.649 11.2947 14.6372C11.2956 14.6322 11.2982 14.618 11.2988 14.5996C11.299 14.5906 11.2992 14.5729 11.2956 14.5511C11.2927 14.5338 11.2833 14.4853 11.2453 14.437C11.196 14.3743 11.1169 14.3362 11.0311 14.3423C10.9652 14.3469 10.9206 14.3762 10.9052 14.387C10.8721 14.4102 10.8529 14.4363 10.8502 14.4398C10.8389 14.4546 10.8318 14.4675 10.8308 14.4693C10.8264 14.477 10.8233 14.4835 10.8226 14.4851L11.2731 14.7018C11.273 14.7021 11.2704 14.7076 11.2664 14.7147C11.2655 14.7162 11.2585 14.729 11.2473 14.7436C11.2447 14.7471 11.2255 14.7731 11.1924 14.7963C11.1771 14.807 11.1325 14.8363 11.0666 14.841C10.9808 14.8471 10.9017 14.8089 10.8524 14.7462C10.8144 14.6979 10.805 14.6495 10.8022 14.6322C10.7986 14.6104 10.7987 14.5928 10.799 14.5838C10.7996 14.5655 10.8021 14.5514 10.803 14.5464C10.8052 14.5348 10.8077 14.5259 10.8083 14.5237C10.8101 14.5176 10.8117 14.513 10.8118 14.5126C10.8127 14.5099 10.8127 14.5101 10.8103 14.5164C10.8065 14.5263 10.8009 14.5404 10.7962 14.5523L11.2612 14.7361ZM11.258 14.744C11.2574 14.7455 11.257 14.7467 11.2568 14.7472C11.2566 14.7478 11.2564 14.7482 11.2564 14.7484C11.2562 14.7488 11.2561 14.7489 11.2562 14.7487C11.2564 14.7483 11.2567 14.7476 11.2572 14.7463C11.2582 14.7438 11.2595 14.7403 11.2612 14.7361L10.7962 14.5523C10.7946 14.5564 10.7893 14.5696 10.787 14.5761L11.258 14.744ZM11.1545 15.1285C11.1754 15.0012 11.2114 14.8733 11.2577 14.7447L10.7873 14.5753C10.7334 14.725 10.6881 14.883 10.6611 15.0476L11.1545 15.1285ZM11.1476 15.1711C11.1495 15.1615 11.1522 15.1436 11.1549 15.126L10.6607 15.0501C10.6592 15.0599 10.6581 15.0673 10.6572 15.0726C10.6568 15.0752 10.6565 15.077 10.6563 15.0781C10.6561 15.0797 10.6562 15.0788 10.6566 15.0767L11.1476 15.1711ZM11.146 15.1956C11.1474 15.1811 11.1489 15.1666 11.1505 15.152L10.6537 15.0958C10.6517 15.1135 10.6498 15.1313 10.6482 15.1491L11.146 15.1956ZM11.1389 15.2961C11.1401 15.2648 11.1428 15.2325 11.1462 15.1938L10.648 15.1509C10.6448 15.1881 10.641 15.2318 10.6393 15.2767L11.1389 15.2961ZM11.1364 15.4032C11.1364 15.3689 11.1375 15.3338 11.1389 15.296L10.6393 15.2767C10.6378 15.3168 10.6364 15.3594 10.6364 15.4032H11.1364ZM11.1364 15.4369V15.4032H10.6364V15.4369H11.1364ZM11.1364 15.6395V15.4369H10.6364V15.6395H11.1364ZM11.1364 17.6946V15.6395H10.6364V17.6946H11.1364ZM11.1364 21.6152V17.6946H10.6364V21.6152H11.1364ZM10.4957 22.25C10.8432 22.25 11.1364 21.9666 11.1364 21.6152H10.6364C10.6364 21.6834 10.5742 21.75 10.4957 21.75V22.25ZM7.66026 22.25H10.4957V21.75H7.66026V22.25ZM3.76963 22.25H7.66026V21.75H3.76963V22.25ZM3.12891 21.6152C3.12891 21.9666 3.42213 22.25 3.76963 22.25V21.75C3.69113 21.75 3.62891 21.6834 3.62891 21.6152H3.12891ZM3.12891 21.4708V21.6152H3.62891V21.4708H3.12891ZM3.12891 17.8644V21.4708H3.62891V17.8644H3.12891ZM3.12891 12.5738V17.8644H3.62891V12.5738H3.12891ZM3.12891 10.5364V12.5738H3.62891V10.5364H3.12891ZM3.47485 10.7873L3.54749 10.721L3.21033 10.3518L3.13769 10.4181L3.47485 10.7873ZM4.41036 9.86284C4.41036 9.84126 4.40924 9.81987 4.40704 9.79873L3.90972 9.85042C3.91014 9.85449 3.91036 9.85862 3.91036 9.86284H4.41036ZM4.41036 10.0072V9.86284H3.91036V10.0072H4.41036ZM4.41036 13.6136V10.0072H3.91036V13.6136H4.41036ZM4.41036 18.9042V13.6136H3.91036V18.9042H4.41036ZM4.41036 21.2303V18.9042H3.91036V21.2303H4.41036ZM6.60508 20.9803H4.16036V21.4803H6.60508V20.9803ZM10.105 20.9803H6.60508V21.4803H10.105V20.9803ZM9.85498 20.2034V21.2303H10.355V20.2034H9.85498ZM9.85498 15.5857V20.2034H10.355V15.5857H9.85498ZM9.93206 14.718C9.86442 15.0149 9.85498 15.3088 9.85498 15.5857H10.355C10.355 15.3166 10.3649 15.069 10.4196 14.8291L9.93206 14.718ZM11.0486 12.9695C10.4858 13.4024 10.0879 14.034 9.93206 14.7181L10.4196 14.8291C10.55 14.2565 10.8845 13.7265 11.3534 13.3659L11.0486 12.9695ZM15.1205 13.0954C13.9779 12.078 12.2478 12.0472 11.0486 12.9695L11.3534 13.3659C12.3683 12.5853 13.8305 12.6162 14.788 13.4688L15.1205 13.0954ZM16.1196 14.9209C16.0156 14.2192 15.6488 13.5658 15.1205 13.0954L14.788 13.4688C15.2332 13.8653 15.5391 14.4143 15.625 14.9942L16.1196 14.9209ZM16.1601 15.6394C16.1601 15.4087 16.1564 15.1692 16.1196 14.9209L15.625 14.9942C15.656 15.2033 15.6601 15.4113 15.6601 15.6394H16.1601ZM16.1601 17.6946V15.6394H15.6601V17.6946H16.1601ZM16.1601 21.2303V17.6946H15.6601V21.2303H16.1601ZM18.3548 20.9803H15.9101V21.4803H18.3548V20.9803ZM21.8547 20.9803H18.3548V21.4803H21.8547V20.9803ZM21.6047 17.8644V21.2303H22.1047V17.8644H21.6047ZM21.6047 12.5738V17.8644H22.1047V12.5738H21.6047ZM21.6047 9.90225V12.5738H22.1047V9.90225H21.6047ZM21.6858 10.0866L21.6888 10.0893L22.0206 9.7152L22.0175 9.71249L21.6858 10.0866ZM17.7391 6.58678L21.6858 10.0866L22.0175 9.71249L18.0708 6.21268L17.7391 6.58678ZM14.0301 3.29777L17.7391 6.58678L18.0708 6.21268L14.3618 2.92367L14.0301 3.29777ZM12.6677 2.08968L14.0301 3.29777L14.3618 2.92367L12.9994 1.71558L12.6677 2.08968ZM11.0184 3.89878L13.0022 2.08724L12.665 1.71802L10.6812 3.52956L11.0184 3.89878ZM7.15594 7.42583L11.0184 3.89878L10.6812 3.52956L6.81878 7.05661L7.15594 7.42583ZM4.32696 10.0092L7.15594 7.42583L6.81878 7.05661L3.9898 9.63997L4.32696 10.0092Z"
      mask="url(#path-2-outside-1)"
    />
  </SvgIcon>
);

export default HomeIcon;