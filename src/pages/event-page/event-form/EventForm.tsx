import React from 'react'
import EventSection from '../event-section/EventSection'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import "yup-phone"
import styles from './EventForm.module.scss'
import CustomTextInput from 'src/components/ui/custom-inputs/custom-text-input/CustomTextInput'
import CustomDateInput from 'src/components/ui/custom-inputs/custom-date-input/CustomDateInput'
import CustomPhoneInput from 'src/components/ui/custom-inputs/custom-phone-input/CustomPhoneInput'
import { EventApplicationService } from 'src/services/EventApplicationService'
import { EventFormProps } from './EventForm.props'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'

interface FormValues {
    fio: string 
    email: string
    phone: string
    birthDate: Date
    studyOrganization: string
}

const EventForm = ({eventId}: EventFormProps) => {

    const initialValues: FormValues = {
        fio: '',
        email: '',
        phone: '',
        birthDate: new Date(),
        studyOrganization: ''
    }

    const phoneRgx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        fio: Yup.string().required('Обязательное поле').min(3, 'Минимум 3 символа'),
        email: Yup.string().required('Обязательное поле').email('Некорректный email'),
        phone: Yup.string().matches(phoneRgx, 'Некорректный номер').required('Обязательное поле').min(3, 'Минимум 3 символа'),
        birthDate: Yup.date().required('Обязательное поле'),
        studyOrganization: Yup.string().required('Обязательное поле')
    })

    const onSubmit = async (values: FormValues) => {
        EventApplicationService.createEventApplication(eventId, values).then(() => {
            addSuccessNotification('Заявка успешно отправлена')
        }).catch(() => {
            addErrorNotification('Произошла ошибка')
        })
    }

    return (
        <EventSection title='Форма регистрации'>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={onSubmit}>
                {({values, errors, setFieldValue, submitForm}) => (
                    <Form>
                        <div className={styles.container}>
                            <div className={styles.input}>
                                <CustomTextInput label='Фамилия, имя, отчество' 
                                                placeholder='ФИО'
                                                requiredLabel={true}
                                                type='text' 
                                                value={values.fio} 
                                                error={errors.fio} 
                                                setValue={(fio: string) => {setFieldValue('fio', fio)}}/>
                                <ErrorMessage className={styles.error} name='fio' component='div'/>
                            </div>
                            <div className={styles.input}>
                                <CustomTextInput label='Электронный адрес' 
                                                placeholder='Электронный адрес' 
                                                requiredLabel={true}
                                                type='text' 
                                                value={values.email} 
                                                error={errors.email} 
                                                setValue={(email: string) => {setFieldValue('email', email)}}/>
                                <ErrorMessage className={styles.error} name='email' component='div'/>
                            </div>
                            <div className={styles.input}>
                                <CustomPhoneInput label='Номер' 
                                                placeholder='Номер'
                                                requiredLabel={true}
                                                country='by'
                                                countryCodeEditable={false}
                                                value={values.phone} 
                                                error={errors.phone} 
                                                setValue={(phone: string) => {setFieldValue('phone', phone)}}/>
                                <ErrorMessage className={styles.error} name='phone' component='div'/>
                            </div>

                            <div className={styles.input}>
                                <CustomDateInput label='Дата рождения' 
                                                placeholder='Номер' 
                                                requiredLabel={true}
                                                value={values.birthDate} 
                                                error={errors.birthDate} 
                                                setValue={(birthDate: Date) => {setFieldValue('birthDate', birthDate)}}/>
                                <ErrorMessage className={styles.error} name='birthDate' component='div'/>
                            </div>
                            <div className={styles.input}>
                                <CustomTextInput label='Учебное заведение' 
                                                placeholder='Учебное заведение' 
                                                requiredLabel={true}
                                                type='text' 
                                                value={values.studyOrganization} 
                                                error={errors.studyOrganization} 
                                                setValue={(studyOrganization: string) => {setFieldValue('studyOrganization', studyOrganization)}}/>
                                <ErrorMessage className={styles.error} name='studyOrganization' component='div'/>
                            </div>
                            <div className={styles.button}>
                                <button type='submit'>Отправить</button>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </EventSection>
    )
}

export default EventForm
