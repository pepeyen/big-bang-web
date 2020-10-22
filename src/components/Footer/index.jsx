import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__content">
                <div className="footer__divisor">
                    <svg
                        viewBox="0 0 138 66" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M138 40.5553C137.546 41.1414 137.136 41.7493 136.618 42.2704C135.43 43.5079 134.113 44.702 132.256 44.1809C130.248 43.5947 129.751 41.8362 129.6 39.9474C129.384 37.125 129.19 34.2809 128.996 31.4585C128.931 30.373 128.823 29.2441 127.592 28.8967C126.491 28.5711 125.865 29.4829 125.325 30.2428C123.77 32.4789 122.28 34.7803 120.769 37.0382C120.013 38.1888 119.214 39.2743 117.983 39.9691C115.91 41.1414 114.334 40.6638 113.492 38.4059C112.866 36.7125 112.693 34.9322 112.693 33.1303C112.693 25.6618 112.672 18.1934 112.607 10.725C112.585 9.35723 112.456 7.98947 112.24 6.64342C111.657 2.97434 111.095 2.73553 107.964 4.81974C107.532 5.10197 107.122 5.64474 106.626 5.25395C106.043 4.77631 106.194 4.05987 106.626 3.56052C108.094 1.82368 109.368 -0.434211 112.132 0.0434203C114.593 0.477631 114.874 2.71381 115.133 4.68947C115.932 10.877 115.349 17.0862 115.5 23.2737C115.587 26.8559 115.543 30.4164 115.608 33.9987C115.63 35.171 115.867 36.4737 117.055 36.9296C118.48 37.4724 119.063 36.0829 119.689 35.2145C121.395 32.8263 122.993 30.3513 124.656 27.9197C125.757 26.2914 127.031 24.7717 129.255 25.4664C131.457 26.1395 131.695 28.1586 131.803 30.0908C131.954 32.5007 131.803 34.9539 132.148 37.3204C132.71 41.1849 133.833 41.5322 136.899 39.1441C137.223 38.9053 137.633 38.7967 138 38.623C138 39.296 138 39.9257 138 40.5553Z"
                            fill="#FFFFFF"
                        />
                        <path
                            d="M31.6551 60.8763C30.813 63.5033 29.3015 64.9796 27.4013 65.7178C25.0261 66.6513 23.5362 65.175 23.0828 62.9388C22.6509 60.7895 22.435 58.575 22.4134 56.3822C22.327 49.348 22.3918 42.2921 22.3702 35.2579C22.3702 33.7816 22.2838 32.3053 22.1327 30.8507C22.0463 29.9822 21.7008 29.1572 20.7939 28.8967C19.8438 28.6145 19.196 29.2658 18.6994 29.9605C17.4038 31.871 16.173 33.825 14.8775 35.7355C14.1217 36.8645 13.4092 38.0368 12.5022 39.0355C11.509 40.1428 10.2566 41.0112 8.61553 40.4684C7.01766 39.9474 6.34828 38.6013 6.19713 37.0816C5.9812 35.1059 5.95961 33.1085 5.89483 31.1112C5.72209 24.7934 5.0743 24.3592 -2.25047e-05 27.1599C-0.0216154 24.7283 2.13767 21.8408 4.36174 21.6888C7.10403 21.4934 7.77341 23.4691 8.27005 25.6835C8.87465 28.4842 8.61553 31.35 8.80987 34.1724C8.89624 35.3447 8.98261 36.6474 10.2998 37.0382C11.5306 37.4072 12.1568 36.2783 12.7398 35.4316C14.2729 33.1737 15.7196 30.8507 17.2527 28.6145C18.5051 26.7691 19.8654 24.7066 22.4997 25.5316C24.9397 26.2914 25.0693 28.6796 25.0909 30.7855C25.1773 38.4493 25.1557 46.1349 25.1773 53.7987C25.1773 54.8408 25.1557 55.9046 25.1989 56.9467C25.3716 62.4395 26.3433 63.1125 31.6551 60.8763Z"
                            fill="#FFFFFF"
                        />
                        <path 
                            d="M48.1736 27.3118C48.4112 26.2697 49.1021 25.8138 49.9227 25.5316C51.2614 25.0539 52.1683 25.6618 52.7297 26.8342C53.7014 28.875 53.9173 31.0678 53.9389 33.2822C53.9605 34.7151 53.6582 36.5605 55.472 37.0164C57.1131 37.4507 57.6961 35.7355 58.4303 34.65C59.9634 32.3921 61.3237 30.0039 62.9 27.7895C63.9364 26.3132 65.2752 24.9671 67.3265 25.423C69.637 25.9441 69.8745 28.0066 70.1336 29.8737C70.3495 31.4368 70.2416 33.0434 70.4791 34.5849C70.6302 35.5618 70.8246 36.7993 72.1201 37.0164C73.243 37.2118 73.8044 36.2783 74.3226 35.5184C75.8989 33.1737 77.3888 30.7421 78.9651 28.3974C80.1527 26.6171 81.4698 24.7717 83.9746 25.4664C86.5442 26.1612 86.6089 28.4408 86.6521 30.5901C86.6737 32.0664 86.6737 33.5428 86.7169 35.0191C86.7385 35.996 86.976 36.8862 87.7102 37.5809C88.2284 38.0803 89.6535 37.6895 89.2865 39.0572C89.0705 39.8171 88.3148 40.121 87.5806 40.3164C86.5226 40.5987 85.702 40.0776 85.1838 39.2309C83.9962 37.3638 84.2985 35.171 83.9098 33.1303C83.6291 31.6757 84.4713 29.5697 82.5495 28.9835C80.3902 28.3105 79.9583 30.6335 79.0514 31.9145C77.4536 34.1289 76.0716 36.4737 74.4306 38.6664C73.4805 39.9474 72.1849 41.0329 70.4143 40.5335C68.6221 40.0559 68.147 38.5362 67.9743 36.8645C67.8232 35.4099 67.6288 33.9553 67.4777 32.4789C67.3265 31.1329 67.4993 29.4178 65.9878 28.9618C64.2171 28.4191 63.5478 30.1993 62.7488 31.3717C61.6476 33.0217 60.6975 34.802 59.5963 36.452C58.9053 37.4941 58.128 38.5362 57.2211 39.3612C54.7379 41.5539 52.557 40.8592 51.6069 37.6678C51.1535 36.1263 51.2614 34.5414 51.1103 32.9783C50.8943 31.046 52.2547 28.2237 48.6271 27.9414C48.4328 27.9632 48.2816 27.5072 48.1736 27.3118Z"
                            fill="#FFFFFF"
                        />
                        <path 
                            d="M108.029 29.2441C108.137 31.5671 106.712 32.7178 104.79 33.3257C103.214 33.825 101.551 34.1072 99.9318 34.5197C98.809 34.802 97.9236 35.4316 98.1396 36.7125C98.3771 38.102 99.4999 38.623 100.752 38.2757C101.94 37.95 103.041 37.2987 104.186 36.7776C104.639 36.5605 105.092 36.0829 105.589 36.5605C106.086 37.0382 105.697 37.5375 105.438 37.9717C103.991 40.4033 98.701 41.5105 96.369 39.8822C93.8858 38.1454 94.1017 34.6283 96.8656 33.1303C98.6362 32.175 100.623 31.8928 102.588 31.5237C103.926 31.2632 105.157 30.6336 104.682 29.027C104.25 27.5941 102.89 27.2901 101.573 27.7895C100.407 28.2237 99.3488 28.9401 98.2691 29.5263C97.8805 29.7217 97.4702 29.9388 97.1679 29.5046C97.0167 29.2875 96.9952 28.8967 97.0599 28.6362C97.427 26.9211 101.379 25.0105 104.034 25.2928C106.345 25.5316 107.856 26.7039 108.029 29.2441Z"
                            fill="#FFFFFF"
                        />
                        <path 
                            d="M38.6296 25.2276C40.8537 25.4013 42.7323 26.1612 43.1425 28.7013C43.5312 31.0678 42.1924 32.5006 40.1195 33.2388C38.5432 33.7816 36.9022 34.0855 35.2611 34.4763C34.0087 34.7803 32.9939 35.3881 33.2962 36.821C33.6201 38.4059 34.9372 38.6447 36.2544 38.2105C37.334 37.8631 38.3057 37.2118 39.3422 36.7125C39.7956 36.4954 40.2491 35.996 40.7241 36.5171C41.1776 36.9947 40.8321 37.4941 40.573 37.95C39.0399 40.5335 33.5769 41.5539 31.2449 39.7302C28.9344 37.9283 29.3663 34.2592 32.1949 33.0217C33.8792 32.2835 35.801 32.0013 37.6363 31.5888C39.0183 31.2631 40.1195 30.6335 39.6661 29.0487C39.2342 27.5072 37.9171 27.4204 36.5783 27.8546C35.7794 28.1151 35.0452 28.5059 34.2679 28.8316C33.5985 29.0921 32.8643 30.3296 32.2165 29.1789C31.7415 28.3539 32.7132 27.6592 33.3394 27.1381C34.8725 25.8572 36.6431 25.2928 38.6296 25.2276Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Footer;