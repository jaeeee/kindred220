places = [
980010000, //�Ƹ���Ʈ������
925020000, //��������
956000100,  //���ǰָ��� �̻��� ������
980030000, //��ī2
0, 		//?
926010000, //�Ƕ�̵�
0, 
0, 
0,
910010500, //����
910340700,//����
221023300,//�����տ�
930000000,//���Ȱ�
200080101,//������ž
0,//?
261000021, //�ι̿��ٸ���
0,
240080000, //�巡����̴�
//921160000 : ���ڼ�
,0,0,0,0,0,0,0,0,
262010000 //�ƽ���
];
function start() {
    string = "";
    //string += "#0# �Ƹ���Ʈ ������"; //�Ƹ���Ʈ ������
    //if (cm.getPlayerStat("LVL") >= 25) string += "#1# ���� ����"; //��������
    //string += "#2# ���� ī�Ϲ�"; //����ī�Ϲ�
    //string += "#3# ���� ī�Ϲ�2"; //����ī�Ϲ�2
    //string += "#4# It is 4 Place"; //?
    //string += "#5# ��Ʈ�� �Ƕ�̵�"; //��Ʈ���Ƕ�̵�
    //string += "#6# Ŀ�׽�Ƽ ����ö"; //Ŀ�׽�Ƽ����ö
    //string += "#7# It is 7 Place"; //?
    //string += "#8# It is 8 Place"; //?
    if (cm.getPlayerStat("LVL") >= 20) string += "#9# ������ ��"; //����
    if (cm.getPlayerStat("LVL") >= 20) string += "#10# ù��° ����"; //ù��°����
    if (cm.getPlayerStat("LVL") >= 20) string += "#11# ������ �տ�"; //�����Ǳտ�
    if (cm.getPlayerStat("LVL") >= 70) string += "#12# ���Ȱ��� ��"; //�̳�������
    if (cm.getPlayerStat("LVL") >= 70) string += "#13# ������ ž"; //������ ž
    //string += "#14# It is 14 Place"; //������
    if (cm.getPlayerStat("LVL") >= 70) string += "#15# �ι̿��� �ٸ���"; //�ι̿��ٸ���
    //string += "#16# It is 16 Place"; //����
    if (cm.getPlayerStat("LVL") >= 120) string += "#17# �巡�� ���̴�"; //�巡�� ���̴�
    //string += "#18# It is 18 Place"; //�̺�Ʈ
    //string += "#19# It is 19 Place"; //�ҷ���
    //string += "#20# It is 20 Place"; //?
    //string += "#21# It is 21 Place"; //��Ÿ
    //string += "#22# It is 22 Place"; //�ݷ���
    //string += "#23# ���̽�����Ʈ�� ����"; //���̽�����Ʈ
    if (cm.getPlayerStat("LVL") >= 40) string += "#27# �ƽ��� �ع���"; //�ƽ��� �ع���
    if (cm.getPlayerStat("LVL") >= 40) string += "#2# ���ǰָ��� �̻��� ������"; //���ǰָ��� �̻��� ������
    if (cm.getPlayerStat("LVL") < 20) string += "#-1# �̵��� �� �ִ� ������ �����ϴ�.";
    cm.sendPlaces(string);
}

function action(mode, type, selection) {
    if (mode > 0 && selection != -1){ //Since all the others savelocations are implemented.
        cm.saveLocation("MIRROR");
        cm.warp(places[selection], 0);
    }
    cm.dispose();
}