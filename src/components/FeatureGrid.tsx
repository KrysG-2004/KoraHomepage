import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
    {
        title: 'Chat with Kora',
        desc: 'Tell Kora about your skills and career goals'
    },
    {
        title: 'AI Analyzes & Matches',
        desc: 'Kora finds top‑tier jobs that fit you'
    },
    {
        title: 'Auto‑Apply',
        desc: 'Kora applies on your behalf'
    }
]

const feature_svgs = [
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.92084 17.1527C8.5579 17.1527 9.07435 16.6363 9.07435 15.9992C9.07435 15.3621 8.5579 14.8457 7.92084 14.8457C7.28378 14.8457 6.76733 15.3621 6.76733 15.9992C6.76733 16.6363 7.28378 17.1527 7.92084 17.1527Z" stroke="url(#paint0_linear_275_3222)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.4189 17.1527C16.056 17.1527 16.5724 16.6363 16.5724 15.9992C16.5724 15.3621 16.056 14.8457 15.4189 14.8457C14.7818 14.8457 14.2654 15.3621 14.2654 15.9992C14.2654 16.6363 14.7818 17.1527 15.4189 17.1527Z" stroke="url(#paint1_linear_275_3222)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.9167 17.1527C23.5538 17.1527 24.0702 16.6363 24.0702 15.9992C24.0702 15.3621 23.5538 14.8457 22.9167 14.8457C22.2796 14.8457 21.7632 15.3621 21.7632 15.9992C21.7632 16.6363 22.2796 17.1527 22.9167 17.1527Z" stroke="url(#paint2_linear_275_3222)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9956 1C13.2831 1.00085 10.6216 1.73763 8.29464 3.13188C5.96766 4.52613 4.06232 6.52562 2.78155 8.91741C1.50079 11.3092 0.892565 14.0037 1.02166 16.7139C1.15076 19.4241 2.01234 22.0486 3.51464 24.3077L1 31L9.42059 29.4769C11.4482 30.4681 13.6734 30.9886 15.9302 30.9998C18.1869 31.011 20.4171 30.5125 22.4545 29.5415C24.4919 28.5705 26.2838 27.152 27.6969 25.3918C29.1099 23.6316 30.1075 21.5751 30.6154 19.3755C31.1232 17.1759 31.1282 14.8901 30.63 12.6883C30.1317 10.4865 29.1431 8.42566 27.7377 6.65931C26.3324 4.89295 24.5466 3.46667 22.5135 2.48678C20.4804 1.50689 18.2524 0.99867 15.9956 1V1Z" stroke="url(#paint3_linear_275_3222)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_275_3222" x1="6.76733" y1="15.9992" x2="9.07435" y2="15.9992" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint1_linear_275_3222" x1="14.2654" y1="15.9992" x2="16.5724" y2="15.9992" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint2_linear_275_3222" x1="21.7632" y1="15.9992" x2="24.0702" y2="15.9992" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint3_linear_275_3222" x1="1" y1="16" x2="31" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient></defs></svg>,
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.18 8.38018C14.9007 9.0841 15.3292 10.034 15.38 11.0402L19.04 7.40018C19.1657 7.25926 19.3198 7.14649 19.4921 7.06928C19.6644 6.99206 19.8512 6.95215 20.04 6.95215C20.2288 6.95215 20.4156 6.99206 20.5879 7.06928C20.7602 7.14649 20.9143 7.25926 21.04 7.40018L24 10.4802C23.5796 10.684 23.1947 10.9542 22.86 11.2802C22.1476 12.0636 21.7642 13.0912 21.7894 14.1497C21.8145 15.2083 22.2462 16.2165 22.9949 16.9653C23.7436 17.714 24.7519 18.1457 25.8105 18.1708C26.869 18.1959 27.8966 17.8125 28.68 17.1002C29.006 16.7655 29.2761 16.3806 29.48 15.9602L32.6 19.0402C32.7409 19.1659 32.8537 19.32 32.9309 19.4923C33.0081 19.6646 33.048 19.8513 33.048 20.0402C33.048 20.229 33.0081 20.4157 32.9309 20.5881C32.8537 20.7604 32.7409 20.9145 32.6 21.0402L28.96 24.6202C29.7484 24.6679 30.5062 24.9422 31.1424 25.4103C31.7786 25.8784 32.266 26.5203 32.5461 27.2588C32.8262 27.9973 32.887 28.801 32.7212 29.5732C32.5554 30.3454 32.1702 31.0534 31.6117 31.6118C31.0532 32.1703 30.3453 32.5556 29.573 32.7214C28.8008 32.8872 27.9971 32.8263 27.2586 32.5463C26.5201 32.2662 25.8782 31.7788 25.4101 31.1426C24.9421 30.5064 24.6677 29.7486 24.62 28.9602L20.96 32.6002C20.8343 32.7411 20.6802 32.8539 20.5079 32.9311C20.3356 33.0083 20.1488 33.0482 19.96 33.0482C19.7712 33.0482 19.5844 33.0083 19.4121 32.9311C19.2398 32.8539 19.0857 32.7411 18.96 32.6002L16 29.5202C16.4204 29.3163 16.8053 29.0462 17.14 28.7202C17.9118 27.9431 18.3433 26.8913 18.3395 25.796C18.3358 24.7008 17.8971 23.652 17.12 22.8802C16.3429 22.1084 15.2911 21.6769 14.1959 21.6807C13.1006 21.6844 12.0518 22.1231 11.28 22.9002C10.954 23.2349 10.6839 23.6198 10.48 24.0402L7.4 20.9602C7.25907 20.8345 7.14631 20.6804 7.06909 20.5081C6.99188 20.3357 6.95197 20.149 6.95197 19.9602C6.95197 19.7713 6.99188 19.5846 7.06909 19.4123C7.14631 19.24 7.25907 19.0859 7.4 18.9602L11.04 15.3802C10.0339 15.3294 9.08392 14.9009 8.38 14.1802C7.61087 13.4111 7.17878 12.3679 7.17878 11.2802C7.17878 10.1925 7.61087 9.14931 8.38 8.38018C9.14913 7.61106 10.1923 7.17896 11.28 7.17896C12.3677 7.17896 13.4109 7.61106 14.18 8.38018V8.38018Z" stroke="url(#paint0_linear_272_4180)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_272_4180" x1="6.95197" y1="20.0002" x2="33.048" y2="20.0002" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient></defs></svg>,
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_275_766)"><path d="M3.42854 13.7139H5.71425C6.01736 13.7139 6.30805 13.8343 6.52237 14.0486C6.7367 14.2629 6.85711 14.5536 6.85711 14.8567V20.571C6.85711 20.8741 6.7367 21.1648 6.52237 21.3791C6.30805 21.5935 6.01736 21.7139 5.71425 21.7139H3.42854C2.82233 21.7139 2.24095 21.4731 1.81229 21.0444C1.38364 20.6157 1.14282 20.0344 1.14282 19.4282V15.9996C1.14282 15.3934 1.38364 14.812 1.81229 14.3833C2.24095 13.9547 2.82233 13.7139 3.42854 13.7139V13.7139Z" stroke="url(#paint0_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.5715 21.7139H26.2857C25.9826 21.7139 25.692 21.5935 25.4776 21.3791C25.2633 21.1648 25.1429 20.8741 25.1429 20.571V14.8567C25.1429 14.5536 25.2633 14.2629 25.4776 14.0486C25.692 13.8343 25.9826 13.7139 26.2857 13.7139H28.5715C29.1777 13.7139 29.7591 13.9547 30.1877 14.3833C30.6164 14.812 30.8572 15.3934 30.8572 15.9996V19.4282C30.8572 20.0344 30.6164 20.6157 30.1877 21.0444C29.7591 21.4731 29.1777 21.7139 28.5715 21.7139V21.7139Z" stroke="url(#paint1_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.7144 27.9996C22.9268 27.9996 24.0895 27.5179 24.9468 26.6606C25.8042 25.8033 26.2858 24.6406 26.2858 23.4282V21.7139" stroke="url(#paint2_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.857 25.1426C19.6148 25.1426 20.3415 25.4436 20.8773 25.9794C21.4131 26.5152 21.7141 27.242 21.7141 27.9997C21.7141 28.7575 21.4131 29.4842 20.8773 30.02C20.3415 30.5558 19.6148 30.8569 18.857 30.8569H15.4284C14.6707 30.8569 13.9439 30.5558 13.4081 30.02C12.8723 29.4842 12.5713 28.7575 12.5713 27.9997C12.5713 27.242 12.8723 26.5152 13.4081 25.9794C13.9439 25.4436 14.6707 25.1426 15.4284 25.1426H18.857Z" stroke="url(#paint3_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.71436 13.714V11.4283C5.71436 8.70035 6.79803 6.08414 8.72697 4.15519C10.6559 2.22625 13.2721 1.14258 16.0001 1.14258C18.728 1.14258 21.3442 2.22625 23.2732 4.15519C25.2021 6.08414 26.2858 8.70035 26.2858 11.4283V13.714" stroke="url(#paint4_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5713 9.14258V12.5711" stroke="url(#paint5_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4285 9.14258V12.5711" stroke="url(#paint6_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5713 17.1426C12.5713 20.1826 19.4284 20.1826 19.4284 17.1426" stroke="url(#paint7_linear_275_766)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><linearGradient id="paint0_linear_275_766" x1="1.14282" y1="17.7139" x2="6.85711" y2="17.7139" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint1_linear_275_766" x1="30.8572" y1="17.7139" x2="25.1429" y2="17.7139" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint2_linear_275_766" x1="21.7144" y1="24.8567" x2="26.2858" y2="24.8567" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint3_linear_275_766" x1="12.5713" y1="27.9997" x2="21.7141" y2="27.9997" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint4_linear_275_766" x1="5.71436" y1="7.42829" x2="26.2858" y2="7.42829" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint5_linear_275_766" x1="12.5713" y1="10.8569" x2="13.5713" y2="10.8569" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint6_linear_275_766" x1="19.4285" y1="10.8569" x2="20.4285" y2="10.8569" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><linearGradient id="paint7_linear_275_766" x1="12.5713" y1="18.2826" x2="19.4284" y2="18.2826" gradientUnits="userSpaceOnUse"><stop stop-color="#24ABFF"></stop><stop offset="0.22" stop-color="#4B84FF"></stop><stop offset="0.625" stop-color="#0144F2"></stop></linearGradient><clipPath id="clip0_275_766"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>
]

const jobs = [
    {
        id: 1,
        title: 'Domain Expert for AI Training & Consulting (No coding required)',
        rate: '$35–150/hour (Part-time)',
        company: 'Top AI Lab',
        location: 'Remote (CN preferred)'
    },
    {
        id: 2,
        title: 'AI Training Intern — Top University Students Only',
        rate: '$5–80/hour (Part-time/Full-time)',
        company: 'Fortune 500 tech firm',
        location: 'Remote'
    },
    {
        id: 3,
        title: 'AI Product Manager',
        rate: '$100K–150K/year',
        company: 'Global AI Startup',
        location: 'Remote / Hybrid'
    },
    {
        id: 4,
        title: 'UI/UX Design Advisor',
        rate: '$25–100/hour (Part-time)',
        company: 'Early-stage AI product studio',
        location: 'Remote / Hybrid (Shanghai)'
    }
]

const job_svgs = [
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_275_1890)"><path d="M18.6905 0.713867H2.97618C2.1872 0.713867 1.54761 1.35346 1.54761 2.14244V17.8567C1.54761 18.6457 2.1872 19.2853 2.97618 19.2853H18.6905C19.4794 19.2853 20.119 18.6457 20.119 17.8567V2.14244C20.119 1.35346 19.4794 0.713867 18.6905 0.713867Z" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.54761 5.71387H20.119" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.262 10L5.11914 12.1429L7.262 14.2857" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.1191 10L17.262 12.1429L15.1191 14.2857" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.1191 14.9999L12.262 8.57129" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_275_1890"><rect width="20" height="20" fill="white" transform="translate(0.833252)"></rect></clipPath></defs></svg>,
    <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.60471 9.34252L19.0333 1.87109" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9619 0.713867L19.0333 1.87101L17.8904 4.94244" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.7618 19.2998H16.1904V9.2998C16.1904 9.11036 16.2657 8.92868 16.3996 8.79473C16.5336 8.66077 16.7153 8.58552 16.9047 8.58552H19.0476C19.237 8.58552 19.4187 8.66077 19.5526 8.79473C19.6866 8.92868 19.7618 9.11036 19.7618 9.2998V19.2998Z" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.619 19.2998H9.04756V11.4427C9.04756 11.2532 9.12281 11.0715 9.25677 10.9376C9.39072 10.8036 9.57241 10.7284 9.76185 10.7284H11.9047C12.0941 10.7284 12.2758 10.8036 12.4098 10.9376C12.5437 11.0715 12.619 11.2532 12.619 11.4427L12.619 19.2998Z" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.47614 19.2998H1.90471L1.90471 13.5855C1.90471 13.3961 1.97996 13.2144 2.11392 13.0804C2.24787 12.9465 2.42955 12.8712 2.61899 12.8712H4.76185C4.95129 12.8712 5.13297 12.9465 5.26693 13.0804C5.40088 13.2144 5.47614 13.3961 5.47614 13.5855L5.47614 19.2998Z" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    <svg width="24" height="24" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5828 18.5653V9.81527L17.7078 5.00746L10.8328 9.81527V13.1806H9.58284V9.21433L17.7078 3.4209L25.8328 9.21433V18.5653H24.5828ZM18.4531 10.6565H19.4625V9.64683H18.4531V10.6565ZM15.9531 10.6565H16.9625V9.64683H15.9531V10.6565ZM18.4531 13.1565H19.4625V12.1468H18.4531V13.1565ZM15.9531 13.1565H16.9625V12.1468H15.9531V13.1565ZM8.83752 23.4209L18.2944 26.1806L25.78 23.8681C25.7559 23.4883 25.6424 23.2146 25.4397 23.0471C25.2368 22.8796 25.0072 22.7959 24.751 22.7959H18.8203C18.2918 22.7959 17.8128 22.7751 17.3835 22.7334C16.9539 22.6917 16.5139 22.5925 16.0635 22.4356L13.3256 21.5387L13.7488 20.3031L16.28 21.219C16.6823 21.3713 17.139 21.4627 17.65 21.4931C18.1613 21.5235 18.8616 21.5411 19.751 21.5459C19.751 21.1565 19.6793 20.8416 19.536 20.6012C19.3926 20.3608 19.1871 20.1934 18.9194 20.099L11.7272 17.4593C11.6791 17.4435 11.6349 17.4315 11.5947 17.4234C11.5547 17.4155 11.5106 17.4115 11.4625 17.4115H8.83752V23.4209ZM3.83752 26.3537V16.1615H11.4344C11.5511 16.1615 11.6711 16.1746 11.7944 16.2009C11.9177 16.2274 12.0323 16.2583 12.1381 16.2937L19.3616 18.9403C19.8087 19.1101 20.1937 19.4154 20.5166 19.8562C20.8395 20.2968 21.001 20.8601 21.001 21.5459H24.751C25.5043 21.5459 26.0813 21.7815 26.4819 22.2528C26.8825 22.7238 27.0828 23.3215 27.0828 24.0459V24.8153L18.3569 27.5075L8.83752 24.7334V26.3537H3.83752ZM5.08752 25.1037H7.58752V17.4115H5.08752V25.1037Z" fill="#021C69"></path></svg>,
    <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6903 10.7143C17.2407 10.7143 20.1189 9.4351 20.1189 7.85714C20.1189 6.27919 17.2407 5 13.6903 5C10.1399 5 7.26172 6.27919 7.26172 7.85714C7.26172 9.4351 10.1399 10.7143 13.6903 10.7143Z" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.26172 7.85742V16.4288C7.26172 18.0003 10.1189 19.286 13.6903 19.286C17.2617 19.286 20.1189 18.0003 20.1189 16.4288V7.85742" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.1189 12.1426C20.1189 13.714 17.2617 14.9997 13.6903 14.9997C10.1189 14.9997 7.26172 13.714 7.26172 12.1426" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5475 2.14326C11.8782 1.11308 9.9351 0.614852 7.97606 0.714686C4.41891 0.714686 1.54749 2.0004 1.54749 3.57183C1.54749 4.41469 2.37606 5.17183 3.69034 5.71469" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.69034 14.2866C2.37606 13.7437 1.54749 12.9866 1.54749 12.1437V3.57227" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.69034 10.0003C2.37606 9.45742 1.54749 8.70028 1.54749 7.85742" stroke="#021C69" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
]

export default function FeatureGrid() {
    useScrollReveal('[data-reveal="feature"]')
    useScrollReveal('[data-reveal="job"]')

    return (
        <section
            className="relative bg-cover bg-center py-24 min-h-screen flex items-center"
            id="opportunity"
            style={{ backgroundImage: "url('/background2.png')" }}
        >
            {/* 顶部渐变过渡 - 从Hero页面过渡到当前页背景 */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50/40 via-slate-50/15 to-transparent z-0"></div>
            
            {/* 底部渐变过渡 - 向TalentCommunity页面过渡 */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/50 via-slate-50/25 to-transparent z-0"></div>
            
            <div className="section-container relative z-10 max-w-7xl mx-auto">
                {/* 第一部分：AI Agent 介绍 */}
                <div className="text-center mb-24">
                    <div className="mb-12">
                        <h2 className="mb-5 text-4xl md:text-5xl font-black text-black leading-tight tracking-tight">
                            Your AI agent finds you the perfect{' '}
                            <span className="text-primary font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                AI-native opportunity
                            </span>
                        </h2>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-black/80 leading-relaxed font-medium">
                            Apply once. Access thousands of opportunities in AI. From full-time AI-native roles to flexible projects in model training and domain expert consulting.
                        </p>
                    </div>

                    {/* 功能卡片网格 */}
                    <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                data-reveal="feature"
                                whileHover={{ 
                                    y: -12,
                                    transition: { duration: 0.35, ease: "easeOut" }
                                }}
                                className="group rounded-2xl bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-350 border border-white/20"
                            >
                                <div className="flex flex-col items-center text-center space-y-5">
                                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-350">
                                        {feature_svgs[i]}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-primary tracking-tight">
                                            {f.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 分隔线 - Apple 风格 */}
                <div className="relative mb-24">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-black/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-black/5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* 第二部分：职位列表 */}
                <div className="text-center">
                    <div className="mb-12">
                        <h3 className="mb-8 text-4xl md:text-5xl font-black text-black tracking-tight">
                            AI-native Work You Can Join Today
                        </h3>
                    </div>

                    {/* 职位卡片网格 */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                        {jobs.map((job, i) => (
                            <motion.article
                                key={job.id}
                                data-reveal="job"
                                whileHover={{ y: -8 }}
                                className="group rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-300">
                                        {job_svgs[i]}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                                            {job.title}
                                        </h4>
                                        <div className="space-y-1 text-sm">
                                            <p className="text-slate-600 font-semibold">
                                                Rate: {job.rate}
                                            </p>
                                            <p className="text-slate-600">
                                                Company: {job.company}
                                            </p>
                                            <p className="text-slate-600">
                                                Location: {job.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* 行动按钮 - Apple 风格重设计 */}
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                        {/* 主要按钮 - Apply for Work */}
                        <motion.button 
                            initial={{ scale: 1, y: 0 }}
                            animate={{ scale: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                                     rounded-2xl px-10 py-4 font-semibold text-white shadow-xl hover:shadow-2xl 
                                     transition-all duration-300 backdrop-blur-sm border border-blue-500/20
                                     min-w-[200px] text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 
                                          transition-opacity duration-300 backdrop-blur-sm"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Apply for Work
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                          -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.button>

                        {/* 次要按钮 - Talent Guide */}
                        <motion.button 
                            initial={{ scale: 1, y: 0 }}
                            animate={{ scale: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.02,
                                y: -1,
                                transition: { duration: 0.25, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="group relative overflow-hidden bg-white/5 backdrop-blur-md 
                                     rounded-2xl px-10 py-4 font-medium text-gray-700 hover:text-gray-900
                                     border border-gray-200/50 hover:border-gray-300/70 shadow-lg hover:shadow-xl 
                                     transition-all duration-300 min-w-[200px] text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Talent Guide
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
