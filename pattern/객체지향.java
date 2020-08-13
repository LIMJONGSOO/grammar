
 //Factory method pattern
 //이점
 //1. 생성자가 변경되는 경우 factory class만 수정하면됨
 //2 .조건에 따라 객체를 생성해 가져오는 일을 개발자가 알 필요가 없게 하는 것

abstract class Component {
  protected abstract String getCompName ();
  public Component () {
    System.out.println(this.getCompName() + " 생성");
  }
}

class Button extends Component {
  @Override
  protected String getCompName() { return "버튼";}
}

class Switch extends Component {
  @Override
  protected String getCompName() { return "스위치";}
}

class Dropdown extends Component {
  @Override
  protected String getCompName() { return "드랍다운";}
}

enum Usage {
  PRESS, TOGGLE, EXPAND
}

class CompFactory {
  public Component getComp (Usage usage) {
    if (usage == Usage.PRESS) {
      return new Button();
    } else if (usage == Usage.TOGGLE) {
      return new Switch();
    } else {
      return new Dropdown();
    }
  }
}


class Console {

  private ComFactory compFactory = new CompFactory();

  Component comp1;
  Component comp2;
  Component comp3;

  void withoutFactor () {
    comp1 = new Button();
    comp2 = new Switch();
    comp3 = new Dropdown();
  }

  void withFactory () {
    comp1 = compFactory.getComp(Usage.PRESS);
    comp2 = compFactory.getComp(Usage.TOGGLE);
    comp3 = compFactory.getComp(Usage.EXPAND);
  }
}

//Abstrct Factoy pattern
//factory 를 다양화
abstract class CompFactory {
  public Component getComp (Usage usage);
}

class DarkCompCompFactory {
  @Override
  public Component getComp (Usage usage) {
    if (usage == Usage.PRESS) {
      return new Button();
    } else if (usage == Usage.TOGGLE) {
      return new Switch();
    } else {
      return new Dropdown();
    }
  }
}



//Mediator pattern
//특정이벤트에 반응해서 관련된 다른클래스에 알려주는 중재자 역할
//여러클래스들의 관계가 특정 이벤트들을 중심으로 복잡하게 얽힌 설계에서 유용

enum Mode { LIST, GALLERY }
public interface ModeListener {
  public void onModeChange (Mode mode);
}

class ListView implements ModeListener {
  @Override
  public void onModeChange(Mode mode) {
    Systme.out.pringln("리스트뷰" + (mode == Mode.LIST ? "보여줌" : "감춤"));
  }
}

class GalleryView implements ModeListener {
  @Override
  public void onModeChange(Mode mode) {
    Systme.out.pringln("갤러리뷰" + (mode == Mode.GALLERY ? "보여줌" : "감춤"));
  }
}

class DataDownloader implements ModeListener {
  @Override
  public void onModeChange(Mode mode) {
    Systme.out.pringln((mode == Mode.LIST ? "리스트" : "갤러리") + "뷰용 데이터 다운로드");
  }
}



public class ModeMediator {
  ArrayList<ModeListener> listeners = new ArrayList<>();

  public void addListener(ModeListener listener) {
    listeners.add(Listener);
  }

  public void OnModeChange (Mode mode) {
    for (ModeListener listener : listeners) {
      listener.onModeChange(mode);
    }
  }
}

public class ModeSwitch {
  Mode mode = Mode.List;

  ModeMediator modeMediator;

  public void setModeMediator {ModeMediator _modeMediator) {
    modeMediator = _modeMediator;
  }

  public void toggleMode () {
    mode = mode == Mode.LIST ? Mode.GALLERY : Mode.LIST;

    if (modeMediator != null) {
      modeMediator.onModeChange(mode);
    }
  }
}


//Composite pattern
//폴더 파일 시스템

public interface FileSystem {
  public int getSize();
  public void remove();
}

class File implements FileStstem {
  private String name;
  private int size;

  public File (String _name, int _size) {
    name = _name; size = _size;
  }

  @Override
  public int getSize() {
    Systme.out.println(name + "파일 크기 : " + size);
    return size;
  }

  @Override
  public void remove() {
    System.out.println(name + " 파일 삭제");
  }
}


class Folder implements FileSystem {
  private String name;
  private ArrayList<FileSystme> includes = new ArrayList<>();

  public Folder (String _name) {
    name = _name;
  }

  public void add (FileSystem fileSystem) {
    includes.add(fileSystem);
  }
}


public class CompositPattern {
  public static void main(String[] args) {
    Folder schoolFolder = new Folder("학교");

    Folder grade1Folder = new Folder("1학년");
    Folder grade2Folder = new Folder("2학년");

    schooleFolder.add(grade1Folder);
    schooleFolder.add(grade2Folder);

    File enterPhoto = new File("입학사진", 256);
    grade1Folder.add(enterPhoto);

    Folder sem1Folder = new Folder("1학기");
    Folder sem2Folder = new Folder("2학기");

    grade2Folder.add(sem1Folder);
    grade2Folder.add(sem2Folder);

    File lecturePlan = new File("강의계획서", 120);
    sem1Folder.add(lecturePlan);

    Folder projFolder = new Folder("프로젝트");
    sem2Folder.add(projFolder);

    File draft = new File("드래프트", 488);
    File finalResult = new File("결과물", 560);

    projFolder.add(draft);
    projFolder.add(finalResult);

    schooleFolder.getSize();

    schooleFolder.remove();
  }
}