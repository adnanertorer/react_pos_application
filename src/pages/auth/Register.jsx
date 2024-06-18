import { Button, Form, Input, Carousel } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "./AuthCarousel";

const Register = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout="vertical">
                        <Form.Item
                            label="Kullanıcı Adı"
                            name={"username"}
                            rules={[{
                                required: true,
                                message: "Lütfen kullanıcı adını yazınız!"
                            }]}
                        >
                            <Input placeholder="Kullanıcı Adınızı yazınız" />
                        </Form.Item>
                        <Form.Item
                            label="E-Posta"
                            name={"email"}
                            rules={[{
                                required: true,
                                message: "Lütfen e-posta adresinizi yazınız!"
                            }]}
                        >
                            <Input placeholder="example@example.com" />
                        </Form.Item>
                        <Form.Item
                            label="Parola"
                            name={"password"}
                            rules={[{
                                required: true,
                                message: "Lütfen parolanızı yazınız!"
                            }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                            label="Tekrar Parola"
                            name={"passwordAgain"}
                            rules={[{
                                required: true,
                                message: "Lütfen tekrar parolanızı yazınız!"
                            }]}
                        >
                            <Input.Password placeholder="Confirm Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full" size="large">
                                Kayıt
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center absolute left-0 bottom-10 w-full">
                        Zaten bir hesabınız var mı?
                        <Link to="/login" className="text-blue-600">Giriş Yap</Link>
                    </div>
                </div>
                <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel className="!h-full px-6 autoplay">
                                <AuthCarousel
                                    img="/images/responsive.svg"
                                    title="Responsive"
                                    desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel
                                    img="/images/statistic.svg"
                                    title="İstatistikler"
                                    desc="Geniş Tutulan İstatistikler"
                                />
                                <AuthCarousel
                                    img="/images/customer.svg"
                                    title="Müşteri Memnuniyeti"
                                    desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                                />
                                <AuthCarousel
                                    img="/images/admin.svg"
                                    title="Yönetici Paneli"
                                    desc="Tek Yerden Yönetim"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;