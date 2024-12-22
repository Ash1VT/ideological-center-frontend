import styles from './StudyMaterialsPage.module.scss'
import PageHeader from 'src/components/page-header/PageHeader'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import MediaSection from 'src/components/media-section/MediaSection'

const StudyMaterialsPage = () => {
    const documents = useSelector((state: RootState) => state.mediaReducer.media)
    const documentCategories = useSelector((state: RootState) => state.mediaCategoriesReducer.mediaCategories)

    return (
        <div className={styles.container}>
            <PageHeader title='Обучающие материалы' image='./images/pages/study.jpg'/>
            <div className={styles.documents}>
                <MediaSection categoriesTitle='Категории' categories={documentCategories} media={documents} onShowMore={async () => {}}/>
            </div>
        </div>
    )
}

export default StudyMaterialsPage
