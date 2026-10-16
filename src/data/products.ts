import type { Product } from '../types/product';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    nom: 'Abrigo Sastre Cruzado Over',
    categoria: 'abrics',
    preu: 285.0,
    descripcio: 'Abric de tall sastre creuat confeccionat amb teixit càlid de llana i solapa ampla.',
    estoc: 6,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPqOJAiZQ3ACAujG3FNP7B5T22RfWJjO5ZhfjI-7tSazizQUGxRh7XxxKRz_MMaotui9hfV7EXZLPIuGRl9eTp3BpWNh7lQ69B-au4bzWlUpWA_2Q81p-l7w8kg4aH33X3Yl2EAAk7QHhKFBvRnxp4nd7OTPdowFkkOMkRNDUMC7bSSmLI22ENcVriqHQOuM8Q24lk3KwWLJ-ECdjrW69IszQZRBZ4KyDPa3NG7GgxKAik-qfOdVFJug',
  },
  {
    id: '2',
    nom: 'Jersey Cuello Perkins',
    categoria: 'jerseys',
    preu: 210.0,
    descripcio: 'Jersei de punt fi amb coll perkins i acabats acanalats, ideal per a entretemps.',
    estoc: 12,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpdJLo4DdqjmcJHN_QV00yzoAOGSAViFfORJomMqh-Hg4VBukQakf2hElW3Bs5VfZ-dB1xbQsxQACpbfBX2jAPeaKfB1cet7h9AG1mxs6JXqnyQ7mAS_5Tt8ZtdlEpYZtvU9Vwxqfp53vyOsnn8z71faZZwYFSQVmeYAQVDlcN3y5HkW_qAm9e7jXxP6rROHnKS04LEBq8n4rGQLZarcCUxclKO3jpqq7NBGz9831j0mOCBSn6KQc1Iw',
  },
  {
    id: '3',
    nom: 'Pantalón Fluido Plisado',
    categoria: 'pantalons',
    preu: 145.0,
    descripcio: 'Pantaló fluid amb detall prisat i cintura elàstica d’alta comoditat.',
    estoc: 0,
    hayStock: false,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDX-t6V89n05g6PaAHMpbLg1zfgiy-hGZPPdxqByuecSJW84HNES2n8RHfh5qqSl9F3DPDKFrY8AXhyrL0e2h3bI1pilxvSUSw4b5uwlkPVHe9UFzRn_Go99H8y05sopa49Rw9Qs5uZKv-Mw1SsV928iOVJR74c4LfYwgh0lQM-9o6g6xnwfOx0UsJ4RflYJ26pJZ4bG8LcQMopsqP-J3AF-USq1DYcN9eedgkgja5W1Oy7kz1pjZtiUw',
  },
  {
    id: '4',
    nom: 'Camisa Popelín Estructurada',
    categoria: 'camises',
    preu: 120.0,
    descripcio: 'Camisa clàssica de cotó popelín amb patró recte i botonadura davantera oculta.',
    estoc: 5,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAw3UmxiiE5rhRhqjO_2WIu38fcq7PPBffuUEc2Tsvp2hnTgUhO309P80mQt5H-WBHXRuQ4s0z_RQvT7w8sufw3sOgu__sxI51aJM80mQnTZhAQXs7tVxlj9kl7MrEY9kz3U1hCpRIc7eNb6pjFD76vKpuQEAgVLmzwj5c9edMGSS_nB0S4JC-QthKPkSUgbOCp3d9QXBfCXguxyWbV7eDD4NTmShxKAUAaTCvOILpn5MRhHo2Aw7Ja1w',
  },
  {
    id: '5',
    nom: 'Vestido Largo Lencero',
    categoria: 'vestits',
    preu: 225.0,
    descripcio: 'Vestit llarg d’estil llencer amb tirants fins i caiguda suau de teixit setinat.',
    estoc: 4,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFiLjlR2sfXTwJNF18WSp_nT1bwT0kMI7nfw1cN_UsdPfTlZlLIJ1Iuk6pDqpfuAcv1oSxXRWgslrPv1n2f74VzavHyzZngM-6Yl7MW6fHuTgE47ZbJck_LzFETc__pgpfwzKHqSaQlIr-eRPparlSX-Wa9skh18zWGYIX3sgYSd5V-VDcm-GSk8GK5JpckHsSTlYXr4XYpDFKUPryV8VVg92B8VNr_P9vedZYfGjzTXzKP-ASuQ9SQ',
  },
  {
    id: '6',
    nom: 'Bolso Tote Piel Minimal',
    categoria: 'complements',
    preu: 195.0,
    descripcio: 'Bossa tote de pell amb doble nansa i disseny geomètric funcional i elegant.',
    estoc: 3,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCus246DTiJw1bPOQCyKVqv4OQiA3VmuW8iS8lcSW-_oKZ3EJQU3Zrc3xuBF4u0Zq5rabZ-o47SJFdTucbqruszEpWCKdKIhGc3imvG6O_N-GR5tAoFAsrXlxQehsP2eafdFB-td-nJ8Zclr-yvKSQmDDe2hLDiE0abzwE0cw9WPFVgaqgoMNP-eIPLg1cnh_HwKVq8gDyr1KMCCFeAmL15gGiZq0JgpWW6r7w2UeLq3HczNLZcY2KbSQ',
  },
  {
    id: '7',
    nom: 'Blazer Entallada Lana Fría',
    categoria: 'abrics',
    preu: 240.0,
    descripcio: 'Americana entallada de llana freda amb tancament d’un botó i butxaques amb solapa.',
    estoc: 7,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkpAt2hG7vQJ6_gfKuvLPEEcwCOzGcuEd3NSlORrFP5Z9hZcaJYslxThjJdU8h-OnDdNgZjMI8ncfqvfIpQJ2IadcRdSz2j9t9eQCeabO1GTdIwe9gcy3fqBPRpndd1J7T9YsTkYCWPh3B822e-secM2YDvp-EqFppBDGh7cIJBNoQS3YgxD1CZD2Wpt57mUOjOD36L_KESQhyoPilveYNsz-Y10j8Ld10BZ7ypXV_zGAYb_uRoJW1qw',
  },
  {
    id: '8',
    nom: 'Sobrecamisa Acolchada Plumón',
    categoria: 'camises',
    preu: 175.0,
    descripcio: 'Sobrecamisa encoixinada de plomís lleuger amb coll clàssic i butxaca al pit.',
    estoc: 9,
    hayStock: true,
    imatge:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtASeLUpJKC7FIkYfErWSIcMOKpmtXkvOTLLAvcEPGi0-9wxthtUPSovCRDbvuENNq2a2Zl_BL2TW-z1Xw3Tdi20SfChej8jmN-01LingBQAQ76Vda6gerkQF47gGft3HOFy1uyzrgZ0Ycr2hUUgKKYdeIhaCJF_FkSGCbVVMxFpoGa3gJKg0UC_N1p17jdqPC1ntl_aJbmiVjUPtyQB498BU6J1H6RU6Siq7ikke09AwYTuVDAuvRnw',
  },
];
