import styles from './MethodicDocumentsPage.module.scss'
import PageHeader from 'src/components/page-header/PageHeader'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import MediaSection from 'src/components/media-section/MediaSection'

const MethodicDocumentsPage = () => {
    const documents = useSelector((state: RootState) => state.mediaReducer.media)
    const documentCategories = useSelector((state: RootState) => state.mediaCategoriesReducer.mediaCategories)

    return (
        <div className={styles.container}>
            <PageHeader title='Методические документы' image='./images/pages/method.jpg'/>
            <div className={styles.documents}>
                <MediaSection categoriesTitle='Категории' categories={documentCategories} media={documents} onShowMore={async () => {}}/>
            </div>
        </div>
    )
}

export default MethodicDocumentsPage
