
<template>
    <div class="main-card padding-card ">
        <div class=" bg-row d-flex my-auto align-items-center justify-content-between px-2 py-2">

            <div class="invP">
                <p class="Inpara2"> Invoice Paid</p>
            </div>

            <div class="d-flex justify-content-between">
                <router-link to="/statement"> <button class="btn"><svg width="16" height="12" viewBox="0 0 16 12"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4698 5.83C14.8817 4.30882 13.8608 2.99331 12.5332 2.04604C11.2056 1.09878 9.62953 0.561286 7.99979 0.5C6.37005 0.561286 4.79398 1.09878 3.46639 2.04604C2.1388 2.99331 1.11787 4.30882 0.529787 5.83C0.490071 5.93985 0.490071 6.06015 0.529787 6.17C1.11787 7.69118 2.1388 9.00669 3.46639 9.95396C4.79398 10.9012 6.37005 11.4387 7.99979 11.5C9.62953 11.4387 11.2056 10.9012 12.5332 9.95396C13.8608 9.00669 14.8817 7.69118 15.4698 6.17C15.5095 6.06015 15.5095 5.93985 15.4698 5.83ZM7.99979 10.5C5.34979 10.5 2.54979 8.535 1.53479 6C2.54979 3.465 5.34979 1.5 7.99979 1.5C10.6498 1.5 13.4498 3.465 14.4648 6C13.4498 8.535 10.6498 10.5 7.99979 10.5Z"
                                fill="#11B826" />
                            <path
                                d="M8 3C7.40666 3 6.82664 3.17595 6.33329 3.50559C5.83994 3.83524 5.45543 4.30377 5.22836 4.85195C5.0013 5.40013 4.94189 6.00333 5.05765 6.58527C5.1734 7.16721 5.45912 7.70176 5.87868 8.12132C6.29824 8.54088 6.83279 8.8266 7.41473 8.94236C7.99667 9.05811 8.59987 8.9987 9.14805 8.77164C9.69623 8.54458 10.1648 8.16006 10.4944 7.66671C10.8241 7.17336 11 6.59334 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39992 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8Z"
                                fill="#11B826" />
                        </svg>
                    </button></router-link>
                <router-link to="/statement"> <button class="btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4698 7.83C14.8817 6.30882 13.8608 4.99331 12.5332 4.04604C11.2056 3.09878 9.62953 2.56129 7.99979 2.5C6.37005 2.56129 4.79398 3.09878 3.46639 4.04604C2.1388 4.99331 1.11787 6.30882 0.529787 7.83C0.490071 7.93985 0.490071 8.06015 0.529787 8.17C1.11787 9.69118 2.1388 11.0067 3.46639 11.954C4.79398 12.9012 6.37005 13.4387 7.99979 13.5C9.62953 13.4387 11.2056 12.9012 12.5332 11.954C13.8608 11.0067 14.8817 9.69118 15.4698 8.17C15.5095 8.06015 15.5095 7.93985 15.4698 7.83ZM7.99979 12.5C5.34979 12.5 2.54979 10.535 1.53479 8C2.54979 5.465 5.34979 3.5 7.99979 3.5C10.6498 3.5 13.4498 5.465 14.4648 8C13.4498 10.535 10.6498 12.5 7.99979 12.5Z"
                                fill="#083EA1" />
                            <path
                                d="M8 5C7.40666 5 6.82664 5.17595 6.33329 5.50559C5.83994 5.83524 5.45543 6.30377 5.22836 6.85195C5.0013 7.40013 4.94189 8.00333 5.05765 8.58527C5.1734 9.16721 5.45912 9.70176 5.87868 10.1213C6.29824 10.5409 6.83279 10.8266 7.41473 10.9424C7.99667 11.0581 8.59987 10.9987 9.14805 10.7716C9.69623 10.5446 10.1648 10.1601 10.4944 9.66671C10.8241 9.17336 11 8.59334 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39992 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z"
                                fill="#083EA1" />
                        </svg>


                    </button></router-link>
            </div>
        </div>
        <div class="details px-2 py-2 d-flex justify-content-between">
            <p class="dp">Date issued <span class="text-muted ">2022-8</span></p>
            <div class="emPdf" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3V3ZM12.9 4L8 7.39L3.1 4H12.9ZM2 12V4.455L7.715 8.41C7.7987 8.46806 7.89813 8.49918 8 8.49918C8.10187 8.49918 8.2013 8.46806 8.285 8.41L14 4.455V12H2Z"
                        fill="#00AEEF" />
                </svg>
                <span class="text-info mx-2 emPdf">Email pdf</span>

            </div>


        </div>
        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Send Email</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="select modalLabel">Statement of</label>
                            <select class="form-select stSelect" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label modalLabel">Reciepent Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Reciepent Name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label modalLabel">Reciepent Email
                                address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Reciepent Email">
                        </div>
                    </div>
                    <div class="my-3 d-flex justify-content-center">

                        <button type="button" class="btn  sendBtn">Send Email</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script >
export default {
    name: 'MoStateMentCard',
}
</script>
<style scoped>
.emPdf {
    cursor: pointer;
}

.dp {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    font-feature-settings: 'tnum' on, 'lnum' on;

    /* Black 100% */

    color: #000000;

}

.padding-card {
    padding: 0px !important;

}

.invP {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 10px;
    gap: 6px;



    /* Green/0 */

    background: #E1FCEF;
    border-radius: 10px;
}

.Inpara2 {
    width: 73px;
    height: 18px;

    /* Caption/c1 */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    /* Green/500 */

    color: #14804A !important;

}

.modalLabel {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */


    /* Black 100% */

    color: #000000;
}

.stSelect {
    width: 100% !important;
    max-width: 100% !important
}

.sendBtn {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 10px 16px !important;
    gap: 10px !important;



    background: #083EA1 !important;
    border-radius: 4px !important;
    color: #fff;
    font-weight: 600 !important;
}

.modal-content {
    border: 1px solid #E8E8E8 !important;
    border-radius: 14px !important;
}

.modal-header {
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
</style>