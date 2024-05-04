const config = {
    baseUrl: String(import.meta.env.VITE_BACKEND_BASE_URL),
    signUpEndpoint: String(import.meta.env.VITE_SIGNUP_ENDPOINT),
    signInEndpoint: String(import.meta.env.VITE_SIGNIN_ENDPOINT),
    findMemberByIdEndpoint: String(import.meta.env.VITE_FIND_MEMBER_BY_ID_ENDPOINT),
    deleteMemberByIdEndpoint: String(import.meta.env.VITE_DELETE_MEMBER_BY_ID_ENDPOINT),
    findMemberByEmailEndpoint: String(import.meta.env.VITE_FIND_MEMBER_BY_EMAIL_ENDPOINT),
    deleteMemberByEmailEndpoint: String(import.meta.env.VITE_DELETE_MEMBER_BY_EMAIL_ENDPOINT),
    findAllExpenseByMemberId: String(import.meta.env.VITE_FIND_ALL_EXPENSE_BY_MEMBER_ID),
    findAllExpenseByMemberEmail: String(import.meta.env.VITE_FIND_ALL_EXPENSE_BY_MEMBER_EMAIL),
    findExpenseByDateAndEmail: String(import.meta.env.VITE_FIND_EXPENSE_BY_DATE_AND_EMAIL),
    findExpenseByDateAndId: String(import.meta.env.VITE_FIND_EXPENSE_BY_DATE_AND_ID),
    saveExpense: String(import.meta.env.VITE_SAVE_EXPENSE),
    deleteExpense: String(import.meta.env.VITE_DELETE_EXPENSE),
    updateExpense: String(import.meta.env.VITE_UPDATE_EXPENSE)

}
export default config;