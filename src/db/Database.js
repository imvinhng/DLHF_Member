export const DATA = [
    {
        id: 1,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh',
        full_address: '56 Nơ Trang Long, Phường 14, Bình Thạnh, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 22:00',
        lat: 10.807202,
        long: 106.695134,
    },
    {
        id: 2,
        location: 'Hai Bà Trưng',
        address: '371A Hai Bà Trưng, Phường 8, Quận 3',
        full_address: '371A Hai Bà Trưng, Phường 8, Quận 3, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20c:00',
        lat: 10.790067,
        long: 106.689098,
    },
    {
        id: 3,
        location: 'Quốc Hương',
        address: '49C Đ. Quốc Hương, Thảo Điền, Quận 2',
        full_address: '49C Đ. Quốc Hương, Thảo Điền, Quận 2, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20:00',
        lat: 10.804783,
        long: 106.731339,
    },
    {
        id: 4,
        location: 'Nguyễn Thiện Thuật',
        address: '268 Đ. Nguyễn Thiện Thuật, Phường 3, Quận 3',
        full_address: '268 Đ. Nguyễn Thiện Thuật, Phường 3, Quận 3, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20:00',
        lat: 10.769671,
        long: 106.678000,
    },
    {
        id: 5,
        location: 'Nguyễn Thái Học',
        address: '85 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1',
        full_address: '85 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20:00',
        lat: 10.767022,
        long: 106.695834,
    },
    {
        id: 6,
        location: 'Phan Văn Trị',
        address: '620 Đ. Phan Văn Trị, Phường 7, Gò Vấp',
        full_address: '620 Đ. Phan Văn Trị, Phường 7, Gò Vấp, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20:00',
        lat: 10.830603,
        long: 106.678686,
    },
    {
        id: 7,
        location: 'Trương Công Định',
        address: '138 Trương Công Định, Phường 14, Tân Bình',
        full_address: '138 Trương Công Định, Phường 14, Tân Bình, Hồ Chí Minh, Việt Nam',
        hours: '07:00 - 20:00',
        lat: 10.794914,
        long: 106.640465,
    },
];

export const dataDistrict = [
    { label: '01', value: '1' },
    { label: '02', value: '2' },
    { label: '03', value: '3' },
    { label: '04', value: '4' },
    { label: '05', value: '5' },
    { label: '06', value: '6' },
    { label: '07', value: '7' },
    { label: '08', value: '8' },
    { label: '09', value: '9' },
    { label: '10', value: '10' },
    { label: 'Bình Thạnh', value: 'Bình Thạnh' },
]

export const dataWard = [
    { label: '01', value: '1' },
    { label: '02', value: '2' },
    { label: '03', value: '3' },
    { label: '04', value: '4' },
    { label: '05', value: '5' },
    { label: '06', value: '6' },
    { label: '07', value: '7' },
    { label: '08', value: '8' },
    { label: '09', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: 'Bến Thành', value: 'Bến Thành' },
]

export const dataCity = [
    { label: 'Hồ Chí Minh', value: 'Hồ Chí Minh' },
    { label: 'Vũng Tàu', value: 'Vũng Tàu' },
    { label: 'Phan Thiết', value: 'Phan Thiết' },
    { label: 'Mũi Né', value: 'Mũi Né' },
    { label: 'Cần Thơ', value: 'Cần Thơ' },
    { label: 'Nha Trang', value: 'Nha Trang' },
    { label: 'Hội An', value: 'Hội An' },
    { label: 'Đà Lạt', value: 'Đà Lạt' },
    { label: 'Hà Nội', value: 'Hà Nội' },
]

export const dataGender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Transgender', value: 'Transgender' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Prefer not to say', value: 'Prefer not to say' },
]

export const dataPaperwork = [
    { label: 'CCCD', value: 'CCCD' },
    { label: 'CMND', value: 'CMND' },
    { label: 'Passport', value: 'Passport' },
    { label: "Driver's License", value: "Driver's License" },
]

export const dataCitizenship = [
    { label: 'Vietnamese', value: 'Vietnamese' },
    { label: 'American', value: 'American' },
    { label: 'Dutch', value: 'Dutch' },
    { label: "Chinese", value: "Chinese" },
]

export const DATA_SPECIAL_OFFER = [
    {
        id: 1,
        msg: 'DISCOUNT 20,000D FOR ORDERS OVER 450,000D',
        image_uri: require('../assets/vouchers/voucher1-large.png'),
        exp_date: '20/9',
    },
    {
        id: 2,
        msg: 'DISCOUNT 50,000D FOR ORDERS OVER 950,000D',
        image_uri: require('../assets/vouchers/voucher3-large.png'),
        exp_date: '30/9',
    },
    {
        id: 3,
        msg: 'DISCOUNT 20,000D FOR ORDERS OVER 450,000D',
        image_uri: require('../assets/vouchers/voucher2-large.png'),
        exp_date: '20/9',
    },
    {
        id: 4,
        msg: 'DISCOUNT 50,000D FOR ORDERS OVER 950,000D',
        image_uri: require('../assets/vouchers/voucher4-large.png'),
        exp_date: '30/9',
    },

];