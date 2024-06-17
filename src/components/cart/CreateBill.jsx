import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <Modal
            title="Create Bill"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}>
            <Form layout={"vertical"} onFinish={onFinish}>
                <Form.Item
                    name={"customerName"}
                    label="Müşteri Adı"
                    rules={[
                        {
                            required: true,
                            message: "Müşteri adı gerekli"
                        }
                    ]}
                >
                    <Input placeholder="Müşteri adını yazınız" />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: 'Telefon numarası gerekli' }]}
                    name={"phoneNumber"}
                    label="Tel No"
                >
                    <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
                </Form.Item>
                <Form.Item
                    label="Ödeme Yöntemi"
                    rules={[{ required: true, message: 'Ödeme yöntemi gerekli' }]}
                    name={"paymentMode"}
                >
                    <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>
                <Card>
                    <div className="flex justify-between">
                        <span>Ara Toplam</span>
                        <span>549.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %8</span>
                        <span className="text-red-600">+43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Toplam</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            className="mt-4"
                            type="primary"
                            onClick={() => setIsModalOpen(true)}
                            htmlType="submit"
                        >
                            Sipariş Oluştur
                        </Button>
                    </div>
                </Card>
            </Form>
        </Modal>
    );
};

export default CreateBill;