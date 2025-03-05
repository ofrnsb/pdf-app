import { FormValues } from '@/applications/hooks/useUserForm';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
    borderBottom: '2px solid #000000',
    paddingBottom: 5,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    border: '1px solid #e2e8f0',
    borderRadius: 5,
    backgroundColor: '#f8fafc',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    borderBottom: '1px dashed #9ca3af',
  },
  text: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 1.5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    width: '30%',
  },
  value: {
    fontSize: 12,
    color: '#000000',
    width: '70%',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#E1E1E1',
    fontStyle: 'italic',
    borderTop: '1px solid #e2e8f0',
    paddingTop: 5,
  },
  watermark: {
    fontSize: 20,
    color: 'rgba(59, 130, 246, 0.1)',
    fontWeight: 'bold',
    textAlign: 'center',
    transform: 'rotate(-45deg)',
  },
  watermarkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: -1,
  },
  watermarkRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export const UserProfilePDF = ({
  user,
  template = 'simple',
}: {
  user: FormValues;
  template?: 'simple' | 'detailed';
}) => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Watermark Full-Page */}
      {user.companyName && (
        <View style={styles.watermarkContainer} fixed>
          {/* Pola grid: 5 baris x 5 kolom */}
          <View style={styles.watermarkRow}>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
          </View>
          <View style={styles.watermarkRow}>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
          </View>
          <View style={styles.watermarkRow}>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
          </View>
          <View style={styles.watermarkRow}>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
          </View>
          <View style={styles.watermarkRow}>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
            <Text style={styles.watermark}>{user.companyName}</Text>
          </View>
        </View>
      )}

      {/* Header */}
      <Text style={styles.header}>
        {template === 'simple' ? 'Profil Pengguna' : 'Detail Profil Pengguna'}
      </Text>

      {/* Konten Utama */}
      {template === 'simple' ? (
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Nama:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          {user.phone && (
            <View style={styles.row}>
              <Text style={styles.label}>Telepon:</Text>
              <Text style={styles.value}>{user.phone}</Text>
            </View>
          )}
        </View>
      ) : (
        <View>
          {/* Bagian Identitas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Nama Lengkap:</Text>
              <Text style={styles.value}>{user.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{user.email}</Text>
            </View>
            {user.phone && (
              <View style={styles.row}>
                <Text style={styles.label}>Telepon:</Text>
                <Text style={styles.value}>{user.phone}</Text>
              </View>
            )}
          </View>

          {/* Bagian Alamat */}
          {(user.street || user.city || user.zipcode) && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Alamat</Text>
              {user.street && (
                <View style={styles.row}>
                  <Text style={styles.label}>Jalan:</Text>
                  <Text style={styles.value}>{user.street}</Text>
                </View>
              )}
              {user.city && (
                <View style={styles.row}>
                  <Text style={styles.label}>Kota:</Text>
                  <Text style={styles.value}>{user.city}</Text>
                </View>
              )}
              {user.zipcode && (
                <View style={styles.row}>
                  <Text style={styles.label}>Kode Pos:</Text>
                  <Text style={styles.value}>{user.zipcode}</Text>
                </View>
              )}
            </View>
          )}

          {/* Bagian Perusahaan */}
          {user.companyName && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Perusahaan</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Nama Perusahaan:</Text>
                <Text style={styles.value}>{user.companyName}</Text>
              </View>
            </View>
          )}
        </View>
      )}

      {/* Footer */}
      <Text style={styles.footer}>
        {user.companyName
          ? `Dibuat oleh: ${
              user.companyName
            } | ${new Date().toLocaleDateString()}`
          : `Dibuat pada: ${new Date().toLocaleDateString()}`}
      </Text>
    </Page>
  </Document>
);
