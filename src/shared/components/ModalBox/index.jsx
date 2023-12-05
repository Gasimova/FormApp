import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export const ModalBox = ({ handleOk, handleCancel, open, post }) => {

    return (
        <>
            <Space>
            </Space>
            <Modal
                open={open}
                title={post?.title + " " + 'adlı postu silmək istədiyinizdən əminsiniz?'}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        <CancelBtn />
                        <OkBtn />
                    </>
                )}
            >
            </Modal>
        </>
    );
};