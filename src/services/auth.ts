import { useIonAlert, useIonLoading } from "@ionic/react";
import { useMutation } from "react-query"
import { useHistory } from "react-router";
import { MESSAGES } from "../constants/messages";
import { postAPI } from "./common"

export const useGenerateOTP = () => {
    const [present, dissmiss] = useIonLoading();
    const [alertPresent] = useIonAlert();

    return useMutation((mobile: string) => { 
        present({
            message: MESSAGES.LOADING,
            mode: 'ios'
        });
        return postAPI('/auth/public/generateOTP', {mobile: mobile})}, {
        onSuccess: ({data}) => {
            sessionStorage.setItem('temp_txnId', data?.txnId);
            dissmiss();
        },
        onError: () => {
            dissmiss();
            alertPresent({
                message: 'Something went wrong.',
                header: 'Opps!',
                mode: 'ios',
                buttons: ['Ok']
            });
        }
    });
}

export const useConfirmOTP = () => {
    const [present, dissmiss] = useIonLoading();
    const [alertPresent] = useIonAlert();

    const navigator = useHistory();
    return useMutation((otp: string) => {
        present({
            message: MESSAGES.LOADING,
            mode: 'ios'
        });
        const txnId = sessionStorage.getItem('temp_txnId') as string || '';
        return postAPI('/auth/public/confirmOTP', {
            otp: otp,
            txnId: txnId
        },)
    },{
        onSuccess: ({data}) => {
            localStorage.setItem('token', data?.token);
            dissmiss();
            navigator.push('/dashboard');
        },
        onError: () => {
            dissmiss();
            alertPresent({
                message: 'Wrong OTP',
                header: 'Opps!',
                mode: 'ios',
                buttons: ['Ok']
            });
        }
    })
}